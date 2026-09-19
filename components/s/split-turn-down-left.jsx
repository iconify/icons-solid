import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u3p9f6bio.css';
import '../../css/j/jcnwc2blw.css';
import '../../css/k/kym7xq7br.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="u3p9f6bio"/><circle transform="rotate(-90 37 8.944)" class="jcnwc2blw"/><path class="kym7xq7br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:split-turn-down-left"} {...others} />);
}

export default Component;
