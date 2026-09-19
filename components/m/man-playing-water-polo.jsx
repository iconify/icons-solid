import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moxluzb8y.css';
import '../../css/i/iocob7nsb.css';
import '../../css/b/bflu38a7x.css';
import '../../css/k/kbi7o2brg.css';
import '../../css/y/y85xttbtj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="moxluzb8y"/><path class="iocob7nsb"/><path class="bflu38a7x"/><path class="kbi7o2brg"/><path class="y85xttbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-playing-water-polo"} {...others} />);
}

export default Component;
