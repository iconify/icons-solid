import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/i/i1r7m_bpd.css';
import '../../css/g/g0oj0e-rq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="rmslx6b5x"/><path class="bzun-yi8p"/><circle class="i1r7m_bpd"/><path class="g0oj0e-rq"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-mexico"} {...others} />);
}

export default Component;
