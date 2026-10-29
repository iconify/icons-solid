import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbaenpbls.css';
import '../../css/h/hhtraac9c.css';
import '../../css/o/om4alprxq.css';
import '../../css/c/cr_4c91ic.css';
import '../../css/g/g_rw74b_k.css';
import '../../css/t/tlq3cx5kl.css';
import '../../css/b/b3s79ibvh.css';
import '../../css/l/l-h8lubam.css';
import '../../css/b/bcd4y6b4h.css';
import '../../css/v/vh9vj1c8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbaenpbls wm-shadow"/><path class="hhtraac9c wm-k"/><path class="om4alprxq wm-k"/><path class="cr_4c91ic wm-k"/><path class="g_rw74b_k wm-k"/><path class="tlq3cx5kl wm-k"/><path class="b3s79ibvh wm-shine"/><path class="l-h8lubam wm-k"/><path class="bcd4y6b4h wm-k"/><path class="vh9vj1c8o wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:book"} {...others} />);
}

export default Component;
