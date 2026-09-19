import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqr9l0ynb.css';
import '../../css/f/ffm2957gr.css';
import '../../css/t/todwt_aam.css';
import '../../css/u/u_9hx-b8i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gqr9l0ynb"/><path class="ffm2957gr"/><path clip-rule="evenodd" class="todwt_aam"/><path class="u_9hx-b8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:certificate"} {...others} />);
}

export default Component;
