import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1-2btbhm.css';
import '../../css/h/hkl-kbbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1-2btbhm"/><path class="hkl-kbbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:ruler"} {...others} />);
}

export default Component;
