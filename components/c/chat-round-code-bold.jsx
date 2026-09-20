import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou2veuy8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ou2veuy8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-bold"} {...others} />);
}

export default Component;
