import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icb0mwb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="icb0mwb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-square-filled"} {...others} />);
}

export default Component;
