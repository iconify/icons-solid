import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvtmg0bps.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cvtmg0bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:voice-mode-download-compact"} {...others} />);
}

export default Component;
