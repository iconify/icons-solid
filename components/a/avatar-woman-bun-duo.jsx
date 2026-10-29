import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlu3b4blq.css';
import '../../css/x/xag2gnuro.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vlu3b4blq"/><path class="wm-a xag2gnuro"/><path class="o9wp5rbfh"/><path class="msfwckeky wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bun-duo"} {...others} />);
}

export default Component;
