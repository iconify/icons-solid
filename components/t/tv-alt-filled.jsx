import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isbbe3e6v.css';
import '../../css/y/ynshwsq7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isbbe3e6v"/><rect class="ynshwsq7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tv-alt-filled"} {...others} />);
}

export default Component;
