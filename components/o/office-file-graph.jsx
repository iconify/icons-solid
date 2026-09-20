import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i8r4dm-gs.css';
import '../../css/v/vkhrympri.css';
import '../../css/w/w223ngbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i8r4dm-gs"/><path class="vkhrympri"/><path class="w223ngbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-graph"} {...others} />);
}

export default Component;
