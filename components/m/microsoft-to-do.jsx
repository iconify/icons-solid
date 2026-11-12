import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt-r8b3tw.css';
import '../../css/c/ckmztbc7a.css';
import '../../css/c/cky9negol.css';
import '../../css/s/s5vh77buj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kt-r8b3tw"/><linearGradient id="SVGe5QvdbLc" x1="149.9" x2="468.2" y1="415.1" y2="96.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="ckmztbc7a"/><stop offset=".994" class="cky9negol"/></linearGradient><path fill="url(#SVGe5QvdbLc)" class="s5vh77buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-to-do"} {...others} />);
}

export default Component;
