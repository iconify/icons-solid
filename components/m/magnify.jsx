import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elkmmg68c.css';
import '../../css/y/y3-1k1brf.css';

const viewBox = {"width":32,"height":32};
const content = `<defs/><path class="elkmmg68c"/><path class="y3-1k1brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:magnify"} {...others} />);
}

export default Component;
