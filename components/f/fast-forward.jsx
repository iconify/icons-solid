import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqn3nubkq.css';
import '../../css/o/opt7g-btl.css';
import '../../css/y/ycv0amh2v.css';
import '../../css/a/a7r-c6btt.css';
import '../../css/w/wll1jfcog.css';
import '../../css/o/o59ge8dmq.css';
import '../../css/x/xamfk7buy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dqn3nubkq wm-a"/><path class="opt7g-btl wm-a"/><path class="wm-a ycv0amh2v"/><path class="a7r-c6btt wm-k"/><path class="wll1jfcog wm-k"/><path class="o59ge8dmq wm-k"/><path class="wm-shine xamfk7buy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:fast-forward"} {...others} />);
}

export default Component;
