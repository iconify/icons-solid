import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4on82bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f4on82bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:calendar-cancel-filled"} {...others} />);
}

export default Component;
