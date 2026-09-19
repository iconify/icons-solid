import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7b52bcxl.css';
import '../../css/z/zvlz7ab9o.css';
import '../../css/r/roko4zy8i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c7b52bcxl"/><path class="zvlz7ab9o"/><path class="roko4zy8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:server-sharp"} {...others} />);
}

export default Component;
