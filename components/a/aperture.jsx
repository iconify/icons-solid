import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz-e1qbmo.css';
import '../../css/b/b3_4zct_v.css';
import '../../css/r/ryz23rbfn.css';
import '../../css/y/ylce7gb5z.css';
import '../../css/t/tdd7l8bvj.css';
import '../../css/f/fywpfvbtz.css';
import '../../css/d/dfw46cvyo.css';
import '../../css/n/nikdhq-ea.css';
import '../../css/h/hahxhfb6f.css';
import '../../css/n/n0j-do1lx.css';
import '../../css/j/j150ds4tv.css';
import '../../css/g/g8ybdbbju.css';
import '../../css/i/iavg4zb8c.css';
import '../../css/y/yauxjmbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz-e1qbmo wm-shadow"/><path class="b3_4zct_v wm-k"/><path class="ryz23rbfn wm-k"/><path class="wm-k ylce7gb5z"/><path class="tdd7l8bvj wm-k"/><path class="fywpfvbtz wm-shine"/><path class="dfw46cvyo wm-k"/><path class="nikdhq-ea wm-k"/><path class="hahxhfb6f wm-k"/><path class="n0j-do1lx wm-k"/><path class="j150ds4tv wm-k"/><path class="g8ybdbbju wm-shine"/><path class="iavg4zb8c wm-k"/><path class="wm-a yauxjmbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:aperture"} {...others} />);
}

export default Component;
