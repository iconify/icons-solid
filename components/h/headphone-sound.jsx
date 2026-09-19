import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1irycc-s.css';
import '../../css/k/ktxr1u0rx.css';
import '../../css/e/e82etfbzy.css';
import '../../css/u/uujeagbzt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b1irycc-s"/><path class="ktxr1u0rx"/><path class="e82etfbzy"/><path class="uujeagbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:headphone-sound"} {...others} />);
}

export default Component;
