import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvqheo0jt.css';
import '../../css/q/qqwrf1bfq.css';
import '../../css/b/byt_qtm9k.css';
import '../../css/w/wtowt5b_g.css';
import '../../css/o/oxapusb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yvqheo0jt"/><path class="qqwrf1bfq wm-k"/><path class="byt_qtm9k wm-k"/><path class="wm-k wtowt5b_g"/><path class="oxapusb_d wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bitcoin"} {...others} />);
}

export default Component;
