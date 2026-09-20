import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdu5r8brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdu5r8brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-vision-pro-filled"} {...others} />);
}

export default Component;
