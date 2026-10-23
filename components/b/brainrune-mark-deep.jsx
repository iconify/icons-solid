import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u1yh-lbhi.css';
import '../../css/c/ctcjcdosq.css';
import '../../css/s/s1ol7dtju.css';
import '../../css/h/h698sbcca.css';

const viewBox = {"width":92,"height":92};
const content = `<g class="t_2lkqbxb"><path class="u1yh-lbhi"/><g class="ctcjcdosq"><path class="s1ol7dtju"/><path class="h698sbcca"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:brainrune-mark-deep"} {...others} />);
}

export default Component;
