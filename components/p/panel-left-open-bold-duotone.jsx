import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhosbdcvu.css';
import '../../css/z/ze4ge3b2n.css';
import '../../css/o/o2nb3h_dq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhosbdcvu"/><path class="ze4ge3b2n"/><path class="o2nb3h_dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-open-bold-duotone"} {...others} />);
}

export default Component;
