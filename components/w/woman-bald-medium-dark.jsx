import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlfzuccoo.css';
import '../../css/h/hdcub6bzu.css';
import '../../css/c/cj9vugbtp.css';
import '../../css/h/hrgbqd31n.css';
import '../../css/b/b7uhi4bry.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/i/ii1pgeb1m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wlfzuccoo"/><path class="hdcub6bzu"/><path class="cj9vugbtp"/><path class="hrgbqd31n"/><path class="b7uhi4bry"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="ii1pgeb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-bald-medium-dark"} {...others} />);
}

export default Component;
