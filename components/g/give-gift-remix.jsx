import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x03w4o6-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x03w4o6-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:give-gift-remix"} {...others} />);
}

export default Component;
