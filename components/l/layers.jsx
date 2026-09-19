import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je8i6b16f.css';
import '../../css/d/d3txjvobg.css';
import '../../css/u/uvgp29bxq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="je8i6b16f"/><path class="d3txjvobg"/><path class="uvgp29bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:layers"} {...others} />);
}

export default Component;
