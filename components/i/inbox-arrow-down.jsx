import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6rk1e3su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6rk1e3su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:inbox-arrow-down"} {...others} />);
}

export default Component;
