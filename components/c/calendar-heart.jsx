import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx3cd51uc.css';
import '../../css/j/jgz4tac6y.css';
import '../../css/k/kq5qlkb-a.css';
import '../../css/m/m8-2w6bei.css';
import '../../css/n/n31r5yb6b.css';
import '../../css/i/ibzy6hbwp.css';
import '../../css/q/qbw_fnvbw.css';
import '../../css/t/t11k26b7q.css';
import '../../css/o/oe4rq9krh.css';
import '../../css/g/g32swxr-w.css';
import '../../css/g/gcr0qpbvw.css';
import '../../css/o/o30gewbwh.css';
import '../../css/l/lvuyodbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx3cd51uc wm-shadow"/><path class="jgz4tac6y wm-k"/><path class="kq5qlkb-a wm-k"/><path class="m8-2w6bei wm-k"/><path class="n31r5yb6b wm-k"/><path class="ibzy6hbwp wm-k"/><path class="qbw_fnvbw wm-shine"/><path class="t11k26b7q wm-a"/><path class="oe4rq9krh wm-a"/><path class="g32swxr-w wm-k"/><path class="gcr0qpbvw wm-k"/><path class="o30gewbwh wm-k"/><path class="lvuyodbao wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:calendar-heart"} {...others} />);
}

export default Component;
