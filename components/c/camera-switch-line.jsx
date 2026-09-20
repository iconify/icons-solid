import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu4zy5bik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu4zy5bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:camera-switch-line"} {...others} />);
}

export default Component;
