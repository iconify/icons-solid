import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsu8t_9kb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vsu8t_9kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-heart-solid"} {...others} />);
}

export default Component;
