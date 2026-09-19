import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlbmq7jjy.css';
import '../../css/a/av19bdz1n.css';
import '../../css/l/liko5dbgp.css';
import '../../css/d/d-s2jmb8u.css';
import '../../css/c/cpilzyf6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tlbmq7jjy"/><path class="av19bdz1n"/><path class="liko5dbgp"/><path class="d-s2jmb8u"/><path class="cpilzyf6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:triumph"} {...others} />);
}

export default Component;
