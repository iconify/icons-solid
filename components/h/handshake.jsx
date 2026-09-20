import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mvaxv261s.css';
import '../../css/o/ogpdnlbnq.css';
import '../../css/y/y2hfcub-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mvaxv261s"/><path class="ogpdnlbnq"/><path class="y2hfcub-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:handshake"} {...others} />);
}

export default Component;
