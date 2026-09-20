import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ett0-9bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ett0-9bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ice-cream-1-remix"} {...others} />);
}

export default Component;
