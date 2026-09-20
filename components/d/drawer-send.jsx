import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogcr5xepy.css';
import '../../css/g/gyx8j7b3u.css';
import '../../css/e/ed7t49f5s.css';
import '../../css/u/u4yl8q-wn.css';
import '../../css/b/b-lww1b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ogcr5xepy"/><path class="gyx8j7b3u"/><path class="ed7t49f5s"/><path class="u4yl8q-wn"/><path class="b-lww1b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:drawer-send"} {...others} />);
}

export default Component;
