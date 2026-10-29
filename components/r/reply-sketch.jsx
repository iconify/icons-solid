import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_sbmst1y.css';
import '../../css/e/el_7qjb5j.css';
import '../../css/t/twn9oxeew.css';
import '../../css/m/mqak27l0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u_sbmst1y wm-k"/><path class="el_7qjb5j wm-a"/><path class="twn9oxeew wm-k"/><path class="mqak27l0q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-sketch"} {...others} />);
}

export default Component;
