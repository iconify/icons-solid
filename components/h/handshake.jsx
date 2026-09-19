import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/in9uhxb8u.css';
import '../../css/q/qklq2bwet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="in9uhxb8u"/><path class="qklq2bwet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:handshake"} {...others} />);
}

export default Component;
