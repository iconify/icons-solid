import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbdagjb_m.css';
import '../../css/i/ii7msgbpq.css';
import '../../css/b/bl94syvto.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lbdagjb_m"/><path class="ii7msgbpq"/><path class="bl94syvto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:camera-square"} {...others} />);
}

export default Component;
