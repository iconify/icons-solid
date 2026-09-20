import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyc28ppqt.css';
import '../../css/k/klmckvt5p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o2pehacao.css';
import '../../css/y/yquj7mbss.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eyc28ppqt"/><path class="klmckvt5p"/><g class="jn8qy4bru"><path class="o2pehacao"/><path class="yquj7mbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:closed-umbrella"} {...others} />);
}

export default Component;
