import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e5op-4hqc.css';
import '../../css/k/kyofrvb7e.css';
import '../../css/e/e_hvle-fh.css';
import '../../css/z/zbv0h6bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e5op-4hqc"/><path class="kyofrvb7e wm-a"/><path class="e_hvle-fh wm-a"/><path class="zbv0h6bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folders-duo"} {...others} />);
}

export default Component;
