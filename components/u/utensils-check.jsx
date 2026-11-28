import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obz2q_blu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obz2q_blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:utensils-check"} {...others} />);
}

export default Component;
