import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dema-c8ir.css';
import '../../css/k/kemjtxbzd.css';
import '../../css/v/vgh1y6bdo.css';
import '../../css/e/eq3m_fbht.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/g/g6bzx12wr.css';
import '../../css/q/qa1td07xs.css';
import '../../css/q/qigvmjaac.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dema-c8ir"/><ellipse class="kemjtxbzd"/><path class="vgh1y6bdo"/><path class="eq3m_fbht"/><g class="doj9dq_jg"><path class="g6bzx12wr"/><path class="qa1td07xs"/><ellipse class="qigvmjaac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ice-hockey"} {...others} />);
}

export default Component;
