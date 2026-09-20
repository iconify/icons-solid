import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y113zabih.css';
import '../../css/n/ndrw9nivs.css';
import '../../css/m/mi48ctyhi.css';
import '../../css/w/wl1pkfb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y113zabih"/><path class="ndrw9nivs"/><path class="mi48ctyhi"/><path class="wl1pkfb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:pathfinder-merge"} {...others} />);
}

export default Component;
