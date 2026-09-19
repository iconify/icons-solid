import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_flxzbbv.css';
import '../../css/c/c4k71-bhq.css';
import '../../css/i/iovi16bio.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q_flxzbbv"/><path class="c4k71-bhq"/><path class="iovi16bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:keras-wordmark"} {...others} />);
}

export default Component;
