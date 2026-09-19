import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvz4xhbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvz4xhbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:bookmark-check-filled"} {...others} />);
}

export default Component;
