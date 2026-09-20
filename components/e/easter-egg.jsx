import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/x/xqf3vee3z.css';
import '../../css/c/c2xn06beg.css';
import '../../css/n/nedvgi7rt.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="xqf3vee3z"/><path class="c2xn06beg"/><path class="nedvgi7rt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:easter-egg"} {...others} />);
}

export default Component;
