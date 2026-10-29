import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd3hh0odx.css';
import '../../css/f/fpxy9uoqa.css';
import '../../css/g/gwcq6bbvy.css';
import '../../css/b/b2bnr_u-m.css';
import '../../css/p/ptiuog4lv.css';
import '../../css/x/xlnk3tq8p.css';
import '../../css/x/xeemx7buz.css';
import '../../css/l/lkv7a5b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-a yd3hh0odx"/><path class="fpxy9uoqa wm-a"/><path class="gwcq6bbvy wm-a"/><path class="b2bnr_u-m wm-shine"/><path class="ptiuog4lv wm-k"/><path class="wm-k xlnk3tq8p"/><path class="wm-k xeemx7buz"/><path class="lkv7a5b3a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-rain"} {...others} />);
}

export default Component;
