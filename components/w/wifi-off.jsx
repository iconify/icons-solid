import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvk2mbcwh.css';
import '../../css/j/j4446_u0j.css';
import '../../css/z/z_b2a8v8y.css';
import '../../css/k/kzjg8jbqj.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvk2mbcwh wm-k"/><path class="j4446_u0j wm-k"/><path class="wm-k z_b2a8v8y"/><path class="kzjg8jbqj wm-k"/><path class="foipgeybq wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wifi-off"} {...others} />);
}

export default Component;
