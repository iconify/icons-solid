import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unyesglzz.css';
import '../../css/o/o53li4bdw.css';
import '../../css/m/mvgov77cq.css';
import '../../css/w/ww94vccvo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="unyesglzz"/><path clip-rule="evenodd" class="o53li4bdw"/><path class="mvgov77cq"/><path clip-rule="evenodd" class="ww94vccvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-open-1-outline"} {...others} />);
}

export default Component;
