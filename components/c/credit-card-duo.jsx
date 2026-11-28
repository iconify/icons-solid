import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f61dg8z5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/z/zn7jywb_j.css';
import '../../css/b/bdx9b--pk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f61dg8z5p secondary"/><g class="dt0cm9dhy primary"><path class="ammxg4bjk"/><path class="zn7jywb_j"/><path class="bdx9b--pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:credit-card-duo"} {...others} />);
}

export default Component;
