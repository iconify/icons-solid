import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tx3vjybot.css';
import '../../css/g/g1z4nccwj.css';
import '../../css/w/w45mv2eii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="tx3vjybot"/><path class="g1z4nccwj"/><path class="w45mv2eii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-onedrive-logo-1"} {...others} />);
}

export default Component;
