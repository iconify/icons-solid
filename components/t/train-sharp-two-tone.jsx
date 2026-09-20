import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d094f7bjn.css';
import '../../css/f/fbs5khb6z.css';
import '../../css/j/j3akw_70p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="d094f7bjn"/><path class="fbs5khb6z"/><path class="j3akw_70p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:train-sharp-two-tone"} {...others} />);
}

export default Component;
