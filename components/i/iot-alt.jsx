import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xujvqmbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xujvqmbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:iot-alt"} {...others} />);
}

export default Component;
