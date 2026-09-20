import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zll40lbqt.css';
import '../../css/l/lrridv7hu.css';
import '../../css/j/j2tz8fb0g.css';
import '../../css/w/w8vz_lqma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zll40lbqt"/><path class="lrridv7hu"/><path class="j2tz8fb0g"/><path class="w8vz_lqma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:love-it-break"} {...others} />);
}

export default Component;
