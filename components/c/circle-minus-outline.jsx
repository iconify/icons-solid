import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twz9dj_yf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="twz9dj_yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:circle-minus-outline"} {...others} />);
}

export default Component;
