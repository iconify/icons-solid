import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw92b50wa.css';
import '../../css/h/hw8jcibaz.css';
import '../../css/a/abi5mbbfk.css';
import '../../css/f/f9k63mb5i.css';
import '../../css/o/opxjd7byb.css';
import '../../css/z/z-uv3x3ug.css';
import '../../css/b/b_xyy7s0w.css';
import '../../css/s/s947u3bga.css';
import '../../css/m/m4yke0b5q.css';
import '../../css/p/pnn26rgzr.css';
import '../../css/q/q0gpjejfm.css';
import '../../css/m/mytr82bht.css';
import '../../css/s/sr_hmlbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yw92b50wa"/><path class="hw8jcibaz"/><path class="abi5mbbfk"/><path class="f9k63mb5i"/><path class="opxjd7byb"/><path class="wm-shine z-uv3x3ug"/><path class="b_xyy7s0w"/><path class="s947u3bga"/><path class="m4yke0b5q"/><path class="pnn26rgzr"/><path class="q0gpjejfm"/><path class="mytr82bht wm-shine"/><path class="sr_hmlbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:quote"} {...others} />);
}

export default Component;
