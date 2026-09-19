import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tga5ydbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tga5ydbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:iot"} {...others} />);
}

export default Component;
