import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/o/ozf5qkbdh.css';
import '../../css/v/v3uf0k-2l.css';
import '../../css/s/shgya_lin.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="ozf5qkbdh"/><path class="v3uf0k-2l"/><path class="shgya_lin"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-marshall-islands"} {...others} />);
}

export default Component;
