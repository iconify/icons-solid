import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb_j-j7cs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tb_j-j7cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:concierge-bell-filled"} {...others} />);
}

export default Component;
