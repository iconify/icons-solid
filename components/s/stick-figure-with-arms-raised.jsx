import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brzn_0bpr.css';
import '../../css/e/eg3fyqypm.css';
import '../../css/s/sma9a6bqv.css';
import '../../css/m/m8195sbyc.css';
import '../../css/s/srj5utbht.css';
import '../../css/c/clvrsyb1i.css';
import '../../css/a/amdgd3uqu.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="brzn_0bpr"><path class="eg3fyqypm"/><path class="sma9a6bqv"/><circle class="m8195sbyc"/><path class="srj5utbht"/><path class="clvrsyb1i"/><path class="amdgd3uqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stick-figure-with-arms-raised"} {...others} />);
}

export default Component;
