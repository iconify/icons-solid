import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f86a2l21j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f86a2l21j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-quality-sd"} {...others} />);
}

export default Component;
