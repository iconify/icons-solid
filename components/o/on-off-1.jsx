import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eluhvw1kg.css';
import '../../css/h/h0dikepah.css';
import '../../css/t/t6893z44m.css';
import '../../css/e/e2eak_byp.css';
import '../../css/p/p0wmsibkj.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="eluhvw1kg"/><path class="h0dikepah"/><path class="t6893z44m"/><path class="e2eak_byp"/><path class="p0wmsibkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:on-off-1"} {...others} />);
}

export default Component;
