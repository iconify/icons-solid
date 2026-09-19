import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m02bcib0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m02bcib0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chat-bubble-plus-filled"} {...others} />);
}

export default Component;
