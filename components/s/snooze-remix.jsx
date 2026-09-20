import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq9kh0lwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uq9kh0lwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:snooze-remix"} {...others} />);
}

export default Component;
