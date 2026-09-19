import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/e/ey2ol9b3k.css';
import '../../css/u/uado6y5ui.css';
import '../../css/i/is6hdcc7l.css';
import '../../css/c/cpezpi5si.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="ey2ol9b3k"/><path class="uado6y5ui"/><path clip-rule="evenodd" class="is6hdcc7l"/><path clip-rule="evenodd" class="cpezpi5si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:gr"} {...others} />);
}

export default Component;
