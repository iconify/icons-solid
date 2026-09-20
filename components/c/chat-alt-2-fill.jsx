import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvw3pbar.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uxvw3pbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-alt-2-fill"} {...others} />);
}

export default Component;
