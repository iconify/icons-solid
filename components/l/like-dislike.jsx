import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feo0r_n-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="feo0r_n-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:like-dislike"} {...others} />);
}

export default Component;
