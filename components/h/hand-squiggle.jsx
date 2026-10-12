import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0lo1qd0f.css';
import '../../css/c/cap7-g62h.css';
import '../../css/g/gty3ovqqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e0lo1qd0f"/><path class="cap7-g62h"/><path class="gty3ovqqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-squiggle"} {...others} />);
}

export default Component;
