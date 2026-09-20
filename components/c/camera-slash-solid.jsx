import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_ao0-bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_ao0-bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:camera-slash-solid"} {...others} />);
}

export default Component;
