import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5ua0i-bx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5ua0i-bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:movie-edit-outline"} {...others} />);
}

export default Component;
