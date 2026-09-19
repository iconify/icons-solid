import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyt-q6bwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyt-q6bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:endpoints-disconnected"} {...others} />);
}

export default Component;
