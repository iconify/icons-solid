import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brwjgqk5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brwjgqk5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:garage-open"} {...others} />);
}

export default Component;
