import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5vnqnb1z.css';
import '../../css/u/ur0uie67w.css';
import '../../css/u/u5hnhdc8t.css';
import '../../css/c/c-3do8b-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n5vnqnb1z"/><path class="ur0uie67w"/><path clip-rule="evenodd" class="u5hnhdc8t"/><path clip-rule="evenodd" class="c-3do8b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:threat-browser-1-flat"} {...others} />);
}

export default Component;
