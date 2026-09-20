import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueb6e8bmp.css';
import '../../css/i/i0qqi58le.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ueb6e8bmp"/><path class="i0qqi58le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:paste-ltr"} {...others} />);
}

export default Component;
