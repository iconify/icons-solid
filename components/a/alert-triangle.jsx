import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exzf4sbzh.css';
import '../../css/x/xqe79onta.css';
import '../../css/g/giezl5baw.css';
import '../../css/i/i0lfumb0d.css';
import '../../css/o/or4ds-b4b.css';
import '../../css/y/yxiz86m8k.css';
import '../../css/b/bd-polbxe.css';
import '../../css/w/wikd1_b9q.css';
import '../../css/o/ovjuvbclf.css';
import '../../css/w/wj95jobgq.css';
import '../../css/k/k918hk6-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exzf4sbzh wm-shadow"/><path class="wm-shadow xqe79onta"/><path class="giezl5baw"/><path class="i0lfumb0d"/><path class="or4ds-b4b"/><path class="yxiz86m8k"/><path class="bd-polbxe wm-shine"/><path class="wikd1_b9q wm-shine"/><path class="ovjuvbclf"/><path class="wj95jobgq"/><path class="k918hk6-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:alert-triangle"} {...others} />);
}

export default Component;
