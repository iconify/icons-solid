import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykumliwdy.css';
import '../../css/k/k6ojw0b3k.css';
import '../../css/o/ozju5v66n.css';
import '../../css/s/s8zygmb6r.css';
import '../../css/v/vlrqudbzm.css';
import '../../css/m/mxit97eps.css';
import '../../css/l/lio3jo1op.css';
import '../../css/c/cktq1gkwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow ykumliwdy"/><path class="k6ojw0b3k wm-k"/><path class="ozju5v66n wm-k"/><path class="s8zygmb6r wm-k"/><path class="vlrqudbzm wm-k"/><path class="mxit97eps wm-shine"/><path class="lio3jo1op wm-k"/><path class="cktq1gkwo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:square-function"} {...others} />);
}

export default Component;
