import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk2-5bcxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rk2-5bcxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-lines-solid"} {...others} />);
}

export default Component;
