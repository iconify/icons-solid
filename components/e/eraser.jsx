import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfwm_-4ok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfwm_-4ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:eraser"} {...others} />);
}

export default Component;
