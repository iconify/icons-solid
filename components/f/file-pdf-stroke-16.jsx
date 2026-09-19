import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1kw-cc7c.css';
import '../../css/o/odgrbee8c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m1kw-cc7c"/><rect class="odgrbee8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-pdf-stroke-16"} {...others} />);
}

export default Component;
