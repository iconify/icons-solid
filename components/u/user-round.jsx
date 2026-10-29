import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3n4r215o.css';
import '../../css/f/fq8ltrlea.css';
import '../../css/j/jrzshguyn.css';
import '../../css/e/ew_zckb3j.css';
import '../../css/y/y_v9mmk1e.css';
import '../../css/f/fbrb7hvqk.css';
import '../../css/o/o21w1vbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3n4r215o wm-shadow"/><path class="fq8ltrlea wm-k"/><path class="jrzshguyn wm-k"/><path class="ew_zckb3j wm-k"/><path class="wm-k y_v9mmk1e"/><path class="fbrb7hvqk wm-k"/><path class="o21w1vbgf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:user-round"} {...others} />);
}

export default Component;
