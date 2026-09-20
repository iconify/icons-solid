import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t22-p6_ia.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t22-p6_ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bowling-ball"} {...others} />);
}

export default Component;
