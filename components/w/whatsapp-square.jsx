import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktcjmyg5d.css';
import '../../css/i/isi39nobh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktcjmyg5d"/><path class="isi39nobh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:whatsapp-square"} {...others} />);
}

export default Component;
