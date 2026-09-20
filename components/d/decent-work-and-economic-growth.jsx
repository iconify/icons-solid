import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8q0bbbsn.css';
import '../../css/e/e23v41bjy.css';
import '../../css/j/jt1tzxb3y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e8q0bbbsn"/><path class="e23v41bjy"/><path class="jt1tzxb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:decent-work-and-economic-growth"} {...others} />);
}

export default Component;
