import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asqqf3q6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asqqf3q6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:discord-filled"} {...others} />);
}

export default Component;
