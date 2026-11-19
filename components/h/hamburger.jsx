import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_l0aknxj.css';
import '../../css/s/sf6wmqb0s.css';
import '../../css/f/fpkymacnh.css';
import '../../css/c/care3fgav.css';
import '../../css/u/u1_5eacmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c_l0aknxj"/><path class="sf6wmqb0s"/><path class="fpkymacnh"/><path class="care3fgav"/><path class="u1_5eacmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hamburger"} {...others} />);
}

export default Component;
