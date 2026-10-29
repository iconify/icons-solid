import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t17_2r4fx.css';
import '../../css/s/swkvfsbyt.css';
import '../../css/h/hd-t26i-u.css';
import '../../css/o/o99pxpahi.css';
import '../../css/n/n2ksok82x.css';
import '../../css/d/d1-cz8b3q.css';
import '../../css/h/hbc_ugb-r.css';
import '../../css/w/wn6s5ebbb.css';
import '../../css/n/nnnwkfbqn.css';
import '../../css/l/l0qsk3bjz.css';
import '../../css/n/nhvvvolvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t17_2r4fx wm-shadow"/><path class="swkvfsbyt wm-k"/><path class="hd-t26i-u wm-k"/><path class="o99pxpahi wm-k"/><path class="n2ksok82x wm-k"/><path class="d1-cz8b3q wm-k"/><path class="hbc_ugb-r wm-shine"/><path class="wm-s wn6s5ebbb"/><path class="nnnwkfbqn wm-s"/><path class="l0qsk3bjz wm-s"/><path class="nhvvvolvt wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heart-plus"} {...others} />);
}

export default Component;
