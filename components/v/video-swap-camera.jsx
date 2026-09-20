import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw4sn7b4o.css';
import '../../css/d/d-drzdbxc.css';
import '../../css/w/wkxl-qb3q.css';
import '../../css/u/unxyci1_z.css';
import '../../css/b/bkk40wbwl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cw4sn7b4o"/><path class="d-drzdbxc"/><path class="wkxl-qb3q"/><path class="unxyci1_z"/><path class="bkk40wbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:video-swap-camera"} {...others} />);
}

export default Component;
