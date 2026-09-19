import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/non9dj5qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="non9dj5qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-left-up"} {...others} />);
}

export default Component;
