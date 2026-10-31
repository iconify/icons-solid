import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yzwpp1-mu.css';
import '../../css/a/a7ebuu5vx.css';
import '../../css/b/bqeg2ib1s.css';
import '../../css/t/t5kotlb-p.css';
import '../../css/y/y4nh-g7yf.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yzwpp1-mu"/><path class="a7ebuu5vx"/><path class="bqeg2ib1s wm-shine"/><path class="t5kotlb-p wm-k"/><path class="wm-a y4nh-g7yf"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mehndi-hand"} {...others} />);
}

export default Component;
