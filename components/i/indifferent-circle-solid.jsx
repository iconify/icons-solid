import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq5p5vhri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq5p5vhri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:indifferent-circle-solid"} {...others} />);
}

export default Component;
