import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eel_9bgqg.css';
import '../../css/v/veqc2cbtz.css';
import '../../css/t/t8qrzkb5i.css';
import '../../css/r/rnf8embqa.css';
import '../../css/u/urhpxvb7o.css';
import '../../css/q/qo8lz_nul.css';
import '../../css/b/b5ohbv7ys.css';
import '../../css/y/ycdfr27mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eel_9bgqg"/><path class="veqc2cbtz"/><path class="t8qrzkb5i"/><path class="rnf8embqa"/><path class="urhpxvb7o"/><path class="qo8lz_nul"/><path class="b5ohbv7ys"/><path class="ycdfr27mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-knob-bold"} {...others} />);
}

export default Component;
