import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yefe715tw.css';
import '../../css/q/qpzpo_b1f.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t08z06bxh.css';
import '../../css/h/ho69mj0-w.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="yefe715tw"/><path class="qpzpo_b1f"/><g class="x8poo_bjf"><ellipse class="t08z06bxh"/><path class="ho69mj0-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hole"} {...others} />);
}

export default Component;
