import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oe6bfxb7t.css';
import '../../css/m/mn9xsmb1m.css';
import '../../css/g/gx8eccbvd.css';
import '../../css/w/w_mefqbay.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="oe6bfxb7t"/><path class="mn9xsmb1m"/><path class="gx8eccbvd"/><path class="w_mefqbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-with-peeking-eye"} {...others} />);
}

export default Component;
