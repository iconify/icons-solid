import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo9kftbtp.css';
import '../../css/u/u5zp6vbks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vo9kftbtp"/><path class="u5zp6vbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:broadcast-filled"} {...others} />);
}

export default Component;
