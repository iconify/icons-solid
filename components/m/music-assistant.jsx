import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8tkshbnt.css';
import '../../css/q/q1adlm-oz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8tkshbnt"/><path class="q1adlm-oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:music-assistant"} {...others} />);
}

export default Component;
