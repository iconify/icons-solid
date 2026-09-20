import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5--hccnw.css';
import '../../css/t/ts4_tacxb.css';
import '../../css/q/qy-x2bcjr.css';
import '../../css/y/ynhzcoben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y5--hccnw"/><path class="ts4_tacxb"/><circle class="qy-x2bcjr"/><rect class="ynhzcoben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-box-duotone-line"} {...others} />);
}

export default Component;
