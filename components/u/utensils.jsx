import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j9_-vv2ay.css';
import '../../css/b/b50ewccat.css';
import '../../css/u/u97t07qeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j9_-vv2ay"/><path class="b50ewccat"/><path class="u97t07qeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:utensils"} {...others} />);
}

export default Component;
