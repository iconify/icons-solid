import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcbww2jsr.css';
import '../../css/r/r6n25fy6y.css';
import '../../css/o/oennkcb-z.css';
import '../../css/h/h75h-gbnl.css';
import '../../css/i/i9jeqqqyv.css';
import '../../css/u/ubk743bwn.css';

const viewBox = {"width":320,"height":200};
const content = `<g class="dcbww2jsr"><path class="r6n25fy6y"/><path class="oennkcb-z"/><path class="h75h-gbnl"/><path class="i9jeqqqyv"/><path class="ubk743bwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:julia"} {...others} />);
}

export default Component;
