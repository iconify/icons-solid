import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw9l6le0j.css';
import '../../css/a/anxy77bbg.css';
import '../../css/k/kqaej-b1t.css';
import '../../css/d/d_0yy4b_u.css';
import '../../css/z/zg9do0e_c.css';
import '../../css/b/b45rzebkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw9l6le0j wm-shadow"/><path class="anxy77bbg wm-k"/><path class="kqaej-b1t wm-k"/><path class="d_0yy4b_u wm-k"/><path class="wm-k zg9do0e_c"/><path class="b45rzebkg wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:circle"} {...others} />);
}

export default Component;
