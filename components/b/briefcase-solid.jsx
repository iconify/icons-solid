import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdfevou9k.css';
import '../../css/h/hfrzhebxm.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="qdfevou9k"/><path class="hfrzhebxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:briefcase-solid"} {...others} />);
}

export default Component;
