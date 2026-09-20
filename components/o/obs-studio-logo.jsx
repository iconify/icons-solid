import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wms_x39_g.css';
import '../../css/n/neoxsqsba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="wms_x39_g"/><path class="neoxsqsba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:obs-studio-logo"} {...others} />);
}

export default Component;
