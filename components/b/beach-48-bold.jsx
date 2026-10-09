import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_f719b8y.css';
import '../../css/z/zn32v344k.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_f719b8y"/><path class="zn32v344k"/><path class="d6cvwtbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-48-bold"} {...others} />);
}

export default Component;
