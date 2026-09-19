import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv2zpyesr.css';

const viewBox = {"width":591,"height":677};
const content = `<path class="pv2zpyesr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:checkboxempty"} {...others} />);
}

export default Component;
