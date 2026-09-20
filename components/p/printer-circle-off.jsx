import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozcrq9qrs.css';
import '../../css/u/us3up4b4k.css';
import '../../css/r/r437gjrkm.css';
import '../../css/u/u1g6nhqyx.css';
import '../../css/d/dt6lafb8d.css';
import '../../css/v/vu922xztn.css';
import '../../css/j/jkou0pb8s.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><path class="ozcrq9qrs"/><path class="us3up4b4k"/><path clip-rule="evenodd" class="r437gjrkm"/><path class="u1g6nhqyx"/><path class="dt6lafb8d"/><path class="vu922xztn"/><path class="jkou0pb8s"/><path clip-rule="evenodd" class="jfigzne9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:printer-circle-off"} {...others} />);
}

export default Component;
