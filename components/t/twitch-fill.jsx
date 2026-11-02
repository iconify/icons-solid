import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjlt7px2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjlt7px2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:twitch-fill"} {...others} />);
}

export default Component;
