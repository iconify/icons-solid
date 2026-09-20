import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0orljh9w.css';
import '../../css/v/v5_kwmb_i.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="f0orljh9w"/><path clip-rule="evenodd" class="v5_kwmb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:perspective-light"} {...others} />);
}

export default Component;
