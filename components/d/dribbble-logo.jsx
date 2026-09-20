import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we324rtjz.css';
import '../../css/t/tz74sfm1n.css';
import '../../css/d/dy29yibkm.css';
import '../../css/w/wq4x7sbjn.css';
import '../../css/c/c-8b0sbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="we324rtjz"/><path clip-rule="evenodd" class="tz74sfm1n"/><path class="dy29yibkm"/><path class="wq4x7sbjn"/><path class="c-8b0sbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dribbble-logo"} {...others} />);
}

export default Component;
