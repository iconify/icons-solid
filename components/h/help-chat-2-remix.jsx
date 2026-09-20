import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3l21nbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o3l21nbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:help-chat-2-remix"} {...others} />);
}

export default Component;
