import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnjq5zbqb.css';
import '../../css/f/f7q3gxb0j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dnjq5zbqb"/><path class="f7q3gxb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-mcs-20"} {...others} />);
}

export default Component;
