import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-hezrxbi.css';
import '../../css/e/e-3idzm0b.css';
import '../../css/j/j9bp8xvnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z-hezrxbi"/><path class="e-3idzm0b"/><path class="j9bp8xvnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-innovation-01"} {...others} />);
}

export default Component;
