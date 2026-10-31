import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j5vqqdekm.css';
import '../../css/k/korjmdb3g.css';
import '../../css/q/q4yq6n5ay.css';
import '../../css/n/ntngoll_a.css';
import '../../css/l/lf2nuccea.css';
import '../../css/l/lyxf42idp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j5vqqdekm wm-shadow"/><path class="korjmdb3g"/><path class="q4yq6n5ay"/><path class="ntngoll_a"/><path class="lf2nuccea"/><path class="lyxf42idp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:filter"} {...others} />);
}

export default Component;
