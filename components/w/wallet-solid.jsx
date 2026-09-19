import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/q/q536fgb0l.css';
import '../../css/h/hy4c77bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="q536fgb0l"/><path class="hy4c77bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wallet-solid"} {...others} />);
}

export default Component;
