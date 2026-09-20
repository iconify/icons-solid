import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yakv6sbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yakv6sbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:institution-checked-filled"} {...others} />);
}

export default Component;
