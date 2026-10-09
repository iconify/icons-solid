import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrvyqicgf.css';
import '../../css/h/hxwgvtb4i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrvyqicgf"/><path class="hxwgvtb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signature-20"} {...others} />);
}

export default Component;
