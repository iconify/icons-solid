import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb-9d2bep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fb-9d2bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-outline"} {...others} />);
}

export default Component;
