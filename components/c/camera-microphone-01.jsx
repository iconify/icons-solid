import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g0pf61plc.css';
import '../../css/f/fwl6ucbbe.css';
import '../../css/b/bjxwieloe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="g0pf61plc"/><path class="fwl6ucbbe"/><path class="bjxwieloe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-microphone-01"} {...others} />);
}

export default Component;
