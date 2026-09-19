import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtoyfe4sg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mtoyfe4sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:chevron-with-circle-right"} {...others} />);
}

export default Component;
