import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s2l7nm5ll.css';
import '../../css/h/hijd9prfl.css';
import '../../css/m/mo-o3pb_t.css';
import '../../css/r/runsd0bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s2l7nm5ll wm-shadow"/><path class="hijd9prfl wm-shadow"/><path class="mo-o3pb_t"/><path class="runsd0bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevron-up"} {...others} />);
}

export default Component;
