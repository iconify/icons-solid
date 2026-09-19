import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6qf1cgpo.css';
import '../../css/h/h5zba18xq.css';
import '../../css/i/i5hlffn0h.css';
import '../../css/i/i9fzrhilo.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="f6qf1cgpo"/><path class="h5zba18xq"/><path class="i5hlffn0h"/><path class="i9fzrhilo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mh-1x1"} {...others} />);
}

export default Component;
