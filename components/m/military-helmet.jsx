import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivw0ljwdx.css';
import '../../css/g/gr6ocbsdt.css';
import '../../css/h/hhokpkr2m.css';
import '../../css/d/d_ydp-b6l.css';
import '../../css/y/y0dtj59ys.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ivw0ljwdx"/><path class="gr6ocbsdt"/><path class="hhokpkr2m"/><path class="d_ydp-b6l"/><path class="y0dtj59ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:military-helmet"} {...others} />);
}

export default Component;
