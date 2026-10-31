import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnzjm8e7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jnzjm8e7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-check-corner-fill-round"} {...others} />);
}

export default Component;
