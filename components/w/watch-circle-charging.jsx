import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x2icmob9k.css';
import '../../css/e/ed0kbfxln.css';
import '../../css/n/n7s66vbns.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x2icmob9k"/><path class="ed0kbfxln"/><path class="n7s66vbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watch-circle-charging"} {...others} />);
}

export default Component;
