import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxx4rjymm.css';
import '../../css/t/tdwr3yesj.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/y/ycsireb8s.css';
import '../../css/y/ywg73fb_n.css';
import '../../css/f/fr236kbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGUCkaXbAi)" clip-rule="evenodd" class="yxx4rjymm"/><path fill="url(#SVGFdJgVcve)" class="tdwr3yesj"/><defs><radialGradient id="SVGFdJgVcve" cx="0" cy="0" r="1" gradientTransform="rotate(48.013 -4.98 14.305)scale(7.35745 6.30132)" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="ycsireb8s"/></radialGradient><linearGradient id="SVGUCkaXbAi" x1="1.21" x2="16.893" y1=".325" y2="25.659" gradientUnits="userSpaceOnUse"><stop offset=".015" class="ywg73fb_n"/><stop offset="1" class="fr236kbdl"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:search-visual-24"} {...others} />);
}

export default Component;
