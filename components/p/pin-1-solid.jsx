import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avgb43z_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="avgb43z_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pin-1-solid"} {...others} />);
}

export default Component;
