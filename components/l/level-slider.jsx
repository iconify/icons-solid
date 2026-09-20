import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9b73nb6i.css';
import '../../css/c/c__qdgb1d.css';
import '../../css/k/k-l-zsmjx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gvgd7ibyf.css';
import '../../css/n/nmjzi7gvr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a9b73nb6i"/><path class="c__qdgb1d"/><path class="k-l-zsmjx"/><g class="ij2x_72vy"><path class="gvgd7ibyf"/><path class="nmjzi7gvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:level-slider"} {...others} />);
}

export default Component;
