import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzyrenbep.css';
import '../../css/e/e4rg5h2em.css';
import '../../css/y/yiyni5b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tzyrenbep"/><path class="e4rg5h2em"/><path class="yiyni5b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lightbulb"} {...others} />);
}

export default Component;
