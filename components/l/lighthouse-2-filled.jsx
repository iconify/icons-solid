import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf4f4fryy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf4f4fryy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lighthouse-2-filled"} {...others} />);
}

export default Component;
