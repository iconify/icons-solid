import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftqjed4ln.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ftqjed4ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-bottom-center-16-solid"} {...others} />);
}

export default Component;
