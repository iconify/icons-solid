import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1fas-7gu.css';
import '../../css/h/h8s0s2i7h.css';
import '../../css/j/jr91qeb0a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e1fas-7gu"/><path class="h8s0s2i7h"/><path class="jr91qeb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:word-wrap-around-bounding-box"} {...others} />);
}

export default Component;
