import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi6jplbfg.css';
import '../../css/y/yg3s2lbnw.css';
import '../../css/j/jyzwxfyfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vi6jplbfg"/><path class="yg3s2lbnw"/><path class="jyzwxfyfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gps-fixed-duotone-line"} {...others} />);
}

export default Component;
