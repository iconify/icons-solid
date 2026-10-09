import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbqaakbsr.css';
import '../../css/f/fys_hacng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbqaakbsr"/><path class="fys_hacng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-20"} {...others} />);
}

export default Component;
