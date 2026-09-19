import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wap7h8uas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wap7h8uas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:ticket-filled"} {...others} />);
}

export default Component;
