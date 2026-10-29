import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykumliwdy.css';
import '../../css/k/k6ojw0b3k.css';
import '../../css/f/fvqhp_ocz.css';
import '../../css/s/s8zygmb6r.css';
import '../../css/v/vlrqudbzm.css';
import '../../css/m/mxit97eps.css';
import '../../css/l/lio3jo1op.css';
import '../../css/y/yfp4dzbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow ykumliwdy"/><path class="k6ojw0b3k wm-k"/><path class="fvqhp_ocz wm-k"/><path class="s8zygmb6r wm-k"/><path class="vlrqudbzm wm-k"/><path class="mxit97eps wm-shine"/><path class="lio3jo1op wm-k"/><path class="wm-a yfp4dzbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:grid-2x2"} {...others} />);
}

export default Component;
