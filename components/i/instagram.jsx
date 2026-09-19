import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n--ljmbqg.css';
import '../../css/q/q9rcctbns.css';
import '../../css/y/yp79oz0ot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n--ljmbqg"/><path class="q9rcctbns"/><path class="yp79oz0ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:instagram"} {...others} />);
}

export default Component;
