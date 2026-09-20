import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qnyksih8p.css';
import '../../css/f/foqtcobmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="qnyksih8p"/><path class="foqtcobmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gowalla-logo-3"} {...others} />);
}

export default Component;
