import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qocopbb2u.css';
import '../../css/g/gi_h19bgs.css';
import '../../css/x/xpxc9t_-x.css';
import '../../css/u/ubcotg3vs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qocopbb2u"/><path clip-rule="evenodd" class="gi_h19bgs"/><path class="xpxc9t_-x"/><path clip-rule="evenodd" class="ubcotg3vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layout-1-outline"} {...others} />);
}

export default Component;
