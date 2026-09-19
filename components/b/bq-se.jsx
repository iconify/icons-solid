import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3366n1uv.css';
import '../../css/r/rg95-461t.css';
import '../../css/h/h6ubuz71n.css';
import '../../css/u/uepxqvbzo.css';
import '../../css/a/axrnembkx.css';
import '../../css/s/s5a2bcbjc.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l3366n1uv"/><path class="rg95-461t"/><path class="h6ubuz71n"/><path class="uepxqvbzo"/><path class="axrnembkx"/><path clip-rule="evenodd" class="s5a2bcbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:bq-se"} {...others} />);
}

export default Component;
