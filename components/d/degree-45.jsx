import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7cew6b7g.css';
import '../../css/u/upr7vbb_w.css';
import '../../css/n/n9wjrab6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="h7cew6b7g"/><path class="upr7vbb_w"/><path class="n9wjrab6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:degree-45"} {...others} />);
}

export default Component;
