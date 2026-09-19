import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq-kuu89s.css';
import '../../css/f/fmlvbub9w.css';
import '../../css/u/u2_g62bcn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qq-kuu89s"/><path clip-rule="evenodd" class="fmlvbub9w"/><path class="u2_g62bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hammer"} {...others} />);
}

export default Component;
