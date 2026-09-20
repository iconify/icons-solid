import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv45h0b6f.css';
import '../../css/j/jb9kertwe.css';
import '../../css/z/z57-8sgwa.css';
import '../../css/m/m1o7iibig.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vv45h0b6f"/><path class="jb9kertwe"/><path class="z57-8sgwa"/><path class="m1o7iibig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insurance-hand"} {...others} />);
}

export default Component;
