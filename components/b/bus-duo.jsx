import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rurotwblm.css';
import '../../css/w/w59hr4b9z.css';
import '../../css/f/f4c56ub5v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rurotwblm"/><path class="w59hr4b9z"/><path class="f4c56ub5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bus-duo"} {...others} />);
}

export default Component;
