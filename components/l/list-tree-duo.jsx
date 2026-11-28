import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bvpz28b_m.css';
import '../../css/k/k6y2b5b4m.css';
import '../../css/c/cskso5bei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bvpz28b_m"/><path class="k6y2b5b4m"/><path class="cskso5bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-tree-duo"} {...others} />);
}

export default Component;
