import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3f56nhaa.css';
import '../../css/y/yc64nyb7j.css';
import '../../css/c/c-i_fub-m.css';
import '../../css/q/qksnn0b9o.css';
import '../../css/p/pvgr-kbex.css';
import '../../css/y/yd79d5bds.css';
import '../../css/y/y1kqo3bsn.css';
import '../../css/w/wwzb21lyo.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="f3f56nhaa"/><path class="yc64nyb7j"/><path class="c-i_fub-m"/><path class="qksnn0b9o"/><path class="pvgr-kbex"/><path class="yd79d5bds"/><path class="y1kqo3bsn"/><path class="wwzb21lyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:qr-code"} {...others} />);
}

export default Component;
