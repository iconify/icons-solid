import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uk-urv4fa.css';
import '../../css/j/jb9d8n0ki.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/n/nf7b53bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uk-urv4fa"/><path class="jb9d8n0ki"/><path class="uecn1lb3p"/><path class="nf7b53bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:language-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
