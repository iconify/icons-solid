import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-q60hb7p.css';
import '../../css/e/ez67ki9sv.css';
import '../../css/m/m_9vb9bnc.css';
import '../../css/z/zf50vpbzm.css';
import '../../css/j/jl9ir4b1q.css';
import '../../css/x/xxyyddbkj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r-q60hb7p"/><path class="ez67ki9sv"/><path class="m_9vb9bnc"/><g class="zf50vpbzm"><path class="jl9ir4b1q"/><path class="xxyyddbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ginger-root"} {...others} />);
}

export default Component;
