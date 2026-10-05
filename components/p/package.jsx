import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nqa26abcw.css';
import '../../css/m/m8b137q2g.css';
import '../../css/y/y0l1tq29l.css';
import '../../css/m/ma4hhybly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="nqa26abcw"/><path class="m8b137q2g"/><path class="y0l1tq29l"/><path class="ma4hhybly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:package"} {...others} />);
}

export default Component;
