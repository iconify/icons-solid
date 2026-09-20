import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/u/uyc7gv16e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="t_ev7s-sv"/><path class="uyc7gv16e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:readme"} {...others} />);
}

export default Component;
