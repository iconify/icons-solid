import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/l/lze8anq-p.css';
import '../../css/q/q_x6h4byx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="lze8anq-p"/><path transform="matrix(.9199 0 0 .9196 1.096 1.101)" class="q_x6h4byx"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:esperanto-flag"} {...others} />);
}

export default Component;
