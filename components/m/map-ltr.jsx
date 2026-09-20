import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww8qfyb6z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ww8qfyb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:map-ltr"} {...others} />);
}

export default Component;
