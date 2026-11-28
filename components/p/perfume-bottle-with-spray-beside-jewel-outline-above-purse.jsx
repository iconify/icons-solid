import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo8k2rb4s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jo8k2rb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:perfume-bottle-with-spray-beside-jewel-outline-above-purse"} {...others} />);
}

export default Component;
