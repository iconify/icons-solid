import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8dmlzbny.css';
import '../../css/h/hmpi2lboc.css';
import '../../css/r/rjpelm1ki.css';
import '../../css/r/rpvif7bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g8dmlzbny"/><path class="hmpi2lboc"/><path class="rjpelm1ki"/><path class="rpvif7bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:drumstick"} {...others} />);
}

export default Component;
