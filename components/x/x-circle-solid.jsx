import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia2ea1eon.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ia2ea1eon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:x-circle-solid"} {...others} />);
}

export default Component;
