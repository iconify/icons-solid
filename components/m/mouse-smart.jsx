import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okywmxbyf.css';
import '../../css/n/nfhr_9b_t.css';
import '../../css/n/nasz79b5q.css';
import '../../css/v/v_sx9pb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="okywmxbyf"/><path class="nfhr_9b_t"/><path class="nasz79b5q"/><path class="v_sx9pb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:mouse-smart"} {...others} />);
}

export default Component;
