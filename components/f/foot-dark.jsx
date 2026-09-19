import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9-lfb4tl.css';
import '../../css/r/rs61gez4m.css';
import '../../css/f/fnxd07bfk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w9-lfb4tl"/><path class="rs61gez4m"/><path class="fnxd07bfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:foot-dark"} {...others} />);
}

export default Component;
