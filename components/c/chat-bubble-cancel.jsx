import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdhe5xgri.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mdhe5xgri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chat-bubble-cancel"} {...others} />);
}

export default Component;
