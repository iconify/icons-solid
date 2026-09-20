import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5cnzkdgo.css';
import '../../css/i/ixm-vyfiv.css';
import '../../css/z/z-lbqwn6z.css';
import '../../css/z/zaky8j-5w.css';
import '../../css/u/un419_fij.css';
import '../../css/w/wayhapbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o5cnzkdgo"/><path class="ixm-vyfiv"/><path class="z-lbqwn6z"/><path class="zaky8j-5w"/><path class="un419_fij"/><path class="wayhapbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:vintage-camera-polaroid"} {...others} />);
}

export default Component;
