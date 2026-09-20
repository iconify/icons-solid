import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fr73l01lq.css';
import '../../css/q/q5x-36clk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="fr73l01lq"/><path class="q5x-36clk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elastic-x-pack-logo"} {...others} />);
}

export default Component;
