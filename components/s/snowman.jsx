import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fkgs8cb4p.css';
import '../../css/l/lyesv9buc.css';
import '../../css/t/t_b2msbub.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fkgs8cb4p"/><path class="lyesv9buc"/><path class="t_b2msbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:snowman"} {...others} />);
}

export default Component;
