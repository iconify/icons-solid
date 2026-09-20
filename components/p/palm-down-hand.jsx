import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx_nc1bah.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v9kf0xb2s.css';
import '../../css/q/qizxgf4ut.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hx_nc1bah"/><g class="jn8qy4bru"><path class="v9kf0xb2s"/><path class="qizxgf4ut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:palm-down-hand"} {...others} />);
}

export default Component;
