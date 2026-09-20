import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu-ic6bvo.css';
import '../../css/u/ujklyuwmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pu-ic6bvo"/><path class="ujklyuwmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-picture-in-picture"} {...others} />);
}

export default Component;
