import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/m/msrio9b7d.css';
import '../../css/z/zev6kv9bt.css';
import '../../css/m/moekc8fww.css';
import '../../css/t/tnwkr8b1s.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGEA8ikeAY" x1="22.034" x2="17.118" y1="9.773" y2="14.842" gradientTransform="translate(1.136 -13.247)scale(3.90869)" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><linearGradient id="SVGAArkrb3e" x1="16.641" x2="10.957" y1="15.564" y2="21.094" gradientTransform="translate(1.136 -13.247)scale(3.90869)" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient></defs><path class="msrio9b7d"/><path fill="url(#SVGEA8ikeAY)" class="zev6kv9bt"/><path fill="url(#SVGAArkrb3e)" class="moekc8fww"/><path class="tnwkr8b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jira-wordmark"} {...others} />);
}

export default Component;
