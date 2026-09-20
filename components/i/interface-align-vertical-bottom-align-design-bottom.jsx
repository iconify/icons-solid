import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_aj0-bjp.css';
import '../../css/d/dyoblhbmc.css';
import '../../css/q/qi7asdbxk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b_aj0-bjp"/><rect transform="rotate(-90 10.5 7.75)" class="dyoblhbmc"/><rect transform="rotate(-90 3.5 5.75)" class="qi7asdbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-vertical-bottom-align-design-bottom"} {...others} />);
}

export default Component;
