import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwt6abcmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwt6abcmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:app-window-mac-plus"} {...others} />);
}

export default Component;
