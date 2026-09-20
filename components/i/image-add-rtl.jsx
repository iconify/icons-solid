import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdylx-b6p.css';
import '../../css/s/skx7sybde.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdylx-b6p"/><path class="skx7sybde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-add-rtl"} {...others} />);
}

export default Component;
