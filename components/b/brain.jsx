import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e9xpminxa.css';
import '../../css/p/pc0k38cwq.css';
import '../../css/v/vu-gv-tmt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e9xpminxa"/><path class="pc0k38cwq"/><path class="vu-gv-tmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:brain"} {...others} />);
}

export default Component;
