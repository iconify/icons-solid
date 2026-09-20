import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/x/xc5k4_b9x.css';
import '../../css/m/mg_mvc0ey.css';
import '../../css/j/jc6vj6bpr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="xc5k4_b9x"/><circle class="mg_mvc0ey"/><path class="jc6vj6bpr"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-brazil"} {...others} />);
}

export default Component;
