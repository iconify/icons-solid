import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/f/fbm1ezbyh.css';
import '../../css/g/g6cp-sb3i.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="fbm1ezbyh"/><path class="g6cp-sb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:help"} {...others} />);
}

export default Component;
