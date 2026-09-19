import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4sk3vb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4sk3vb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:arrows-right-left"} {...others} />);
}

export default Component;
