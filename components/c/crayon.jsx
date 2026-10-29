import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1y8gccpz.css';
import '../../css/f/fmkci3mdn.css';
import '../../css/w/w3ld8hoqr.css';
import '../../css/q/qcavsxb0g.css';
import '../../css/g/g0wc5jdpo.css';
import '../../css/f/f1s02ivkz.css';
import '../../css/c/c8xij1bkx.css';
import '../../css/d/dkq2dbrtg.css';
import '../../css/v/vsyh2zl8y.css';
import '../../css/d/dtarutb5j.css';
import '../../css/r/r3gye34iy.css';
import '../../css/u/uz2qx0agq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1y8gccpz wm-shadow"/><path class="fmkci3mdn wm-k"/><path class="w3ld8hoqr wm-k"/><path class="qcavsxb0g wm-k"/><path class="g0wc5jdpo wm-k"/><path class="f1s02ivkz wm-k"/><path class="c8xij1bkx wm-shine"/><path class="dkq2dbrtg wm-k"/><path class="vsyh2zl8y wm-k"/><path class="dtarutb5j wm-k"/><path class="r3gye34iy wm-k"/><path class="uz2qx0agq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:crayon"} {...others} />);
}

export default Component;
