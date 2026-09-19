import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz2c466ij.css';
import '../../css/u/unw0i2xbo.css';
import '../../css/x/xtn16ws4v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pz2c466ij"/><path class="unw0i2xbo"/><path class="xtn16ws4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:snooze"} {...others} />);
}

export default Component;
