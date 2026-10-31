import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/glsa1fbqp.css';
import '../../css/r/r8ov0ybio.css';
import '../../css/o/o4o0z3b9c.css';
import '../../css/e/esnb34p8e.css';
import '../../css/d/d-isrd9sw.css';
import '../../css/f/fm-m90lxt.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="glsa1fbqp"/><path class="r8ov0ybio wm-s"/><path class="o4o0z3b9c wm-shine"/><path class="esnb34p8e wm-k"/><path class="d-isrd9sw wm-a"/><path class="fm-m90lxt wm-s"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:jingle-bells"} {...others} />);
}

export default Component;
