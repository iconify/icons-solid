import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2bjxmbnr.css';
import '../../css/h/hkhqswb8k.css';
import '../../css/j/j3_ah-b0w.css';
import '../../css/y/ye1mxmbro.css';
import '../../css/f/fvalztbvt.css';
import '../../css/k/kxkd8jbwb.css';
import '../../css/h/h37eixlfv.css';
import '../../css/d/d6t3kt4qf.css';
import '../../css/o/onxd9xb9k.css';
import '../../css/x/xaf5rvmyp.css';
import '../../css/y/yssfr7vdc.css';
import '../../css/j/jkubskb6j.css';
import '../../css/o/og4q67bus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow z2bjxmbnr"/><path class="hkhqswb8k wm-k"/><path class="j3_ah-b0w wm-k"/><path class="wm-k ye1mxmbro"/><path class="fvalztbvt wm-k"/><path class="kxkd8jbwb wm-shine"/><path class="h37eixlfv wm-a"/><path class="d6t3kt4qf wm-a"/><path class="onxd9xb9k wm-a"/><path class="wm-a xaf5rvmyp"/><path class="wm-k yssfr7vdc"/><path class="jkubskb6j wm-s"/><path class="og4q67bus wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lunar-drum"} {...others} />);
}

export default Component;
