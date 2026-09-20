import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5rl6d9jn.css';
import '../../css/e/eof3lkbhp.css';
import '../../css/w/w2qbg1srf.css';
import '../../css/q/qvsov4fod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k5rl6d9jn"/><path class="eof3lkbhp"/><path class="w2qbg1srf"/><path class="qvsov4fod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:guitar"} {...others} />);
}

export default Component;
