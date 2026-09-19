import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8q8fj40b.css';
import '../../css/q/q99ox19wx.css';
import '../../css/u/uo7fxkwnr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z8q8fj40b"/><path class="q99ox19wx"/><path class="uo7fxkwnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:round-pushpin"} {...others} />);
}

export default Component;
