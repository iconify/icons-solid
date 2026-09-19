import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz_vtj53w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tz_vtj53w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-bottom-center-text-solid"} {...others} />);
}

export default Component;
