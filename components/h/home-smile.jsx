import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhf3-7eiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhf3-7eiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:home-smile"} {...others} />);
}

export default Component;
