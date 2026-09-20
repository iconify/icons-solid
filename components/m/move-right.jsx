import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wto30ebrs.css';
import '../../css/w/w8wk_mbad.css';
import '../../css/h/h6vz9unec.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wto30ebrs"/><path class="w8wk_mbad"/><path class="h6vz9unec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:move-right"} {...others} />);
}

export default Component;
