import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ox22efwxq.css';
import '../../css/s/sz-ttxumc.css';
import '../../css/x/x68c9vb8y.css';
import '../../css/p/pcp6t0btv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ox22efwxq"/><path class="sz-ttxumc"/><path class="x68c9vb8y"/><path class="pcp6t0btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tangerinr"} {...others} />);
}

export default Component;
