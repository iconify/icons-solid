import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts7a0cbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts7a0cbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:cellphone-outlined"} {...others} />);
}

export default Component;
