import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_gvckftk.css';
import '../../css/u/uhqi6hhrp.css';
import '../../css/x/x8mrpdb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_gvckftk wm-k"/><path class="uhqi6hhrp wm-shine"/><path class="wm-shine x8mrpdb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:book-marked"} {...others} />);
}

export default Component;
