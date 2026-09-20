import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv74wh8fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kv74wh8fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:paintbrush-2"} {...others} />);
}

export default Component;
