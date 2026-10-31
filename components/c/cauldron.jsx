import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fk98_op1x.css';
import '../../css/i/id-yq51df.css';
import '../../css/c/cjdk4tbbn.css';
import '../../css/d/dk4q_s7uv.css';
import '../../css/d/d-g0pn0te.css';
import '../../css/v/vqpb4rbqh.css';
import '../../css/e/eqnalzuml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fk98_op1x wm-shadow"/><path class="id-yq51df"/><path class="cjdk4tbbn"/><path class="dk4q_s7uv"/><path class="d-g0pn0te wm-s"/><path class="vqpb4rbqh wm-s"/><path class="eqnalzuml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cauldron"} {...others} />);
}

export default Component;
