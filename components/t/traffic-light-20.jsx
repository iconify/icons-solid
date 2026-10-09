import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmaryiywy.css';
import '../../css/y/ytqlk8bxg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmaryiywy"/><path class="ytqlk8bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-light-20"} {...others} />);
}

export default Component;
