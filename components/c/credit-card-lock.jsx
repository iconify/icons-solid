import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh0fgvbep.css';
import '../../css/r/r3-6mqbtg.css';
import '../../css/y/yr2yss6oa.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dh0fgvbep"/><path class="r3-6mqbtg"/><path class="yr2yss6oa"/><path class="dtkzsnbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-lock"} {...others} />);
}

export default Component;
