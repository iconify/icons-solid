import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxqhs0bky.css';
import '../../css/n/nhiooggjj.css';
import '../../css/r/rnjzpr37e.css';
import '../../css/d/dpffpxo2f.css';
import '../../css/h/hbv7-4bar.css';
import '../../css/c/cxtmk-2xh.css';
import '../../css/z/zny51pb-p.css';
import '../../css/u/umuu-ic5o.css';
import '../../css/o/o7adl6bos.css';
import '../../css/l/l4yvqjr4e.css';
import '../../css/i/ijl795kfh.css';
import '../../css/u/ug3qzicyp.css';
import '../../css/m/mu6pg5nsq.css';
import '../../css/z/z4b4d6bpz.css';
import '../../css/m/mod8bpbul.css';
import '../../css/l/l9f8c34pt.css';
import '../../css/r/rl1cvbcxy.css';
import '../../css/c/cyn651bsh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wxqhs0bky"/><path class="nhiooggjj"/><path class="rnjzpr37e"/><path class="dpffpxo2f"/><path class="hbv7-4bar"/><path class="cxtmk-2xh"/><path class="zny51pb-p"/><path class="umuu-ic5o"/><path class="o7adl6bos"/><path class="l4yvqjr4e"/><path class="ijl795kfh"/><path class="ug3qzicyp"/><path class="mu6pg5nsq"/><path class="z4b4d6bpz"/><path class="mod8bpbul"/><path class="l9f8c34pt"/><path class="rl1cvbcxy"/><path class="cyn651bsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-fairy-medium"} {...others} />);
}

export default Component;
