import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gi6mtemnd.css';
import '../../css/s/sl8tcp1uu.css';
import '../../css/m/m00bsdb2c.css';
import '../../css/a/a6hwve_iz.css';
import '../../css/j/jf54_fdmr.css';
import '../../css/x/xftggvusy.css';
import '../../css/f/fscdgqbfj.css';
import '../../css/n/neib7jbrk.css';
import '../../css/k/k924-sbrs.css';
import '../../css/z/zfgs3dtyt.css';
import '../../css/c/c80kak1ov.css';
import '../../css/m/m-eeb9wak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gi6mtemnd wm-shadow"/><path class="sl8tcp1uu"/><path class="m00bsdb2c"/><path class="a6hwve_iz"/><path class="jf54_fdmr"/><path class="wm-shine xftggvusy"/><path class="fscdgqbfj"/><path class="neib7jbrk"/><path class="k924-sbrs"/><path class="zfgs3dtyt"/><path class="c80kak1ov wm-shine"/><path class="m-eeb9wak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:key"} {...others} />);
}

export default Component;
