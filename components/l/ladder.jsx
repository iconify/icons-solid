import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn6doab_j.css';
import '../../css/w/wt-ad2b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xn6doab_j"/><path class="wt-ad2b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ladder"} {...others} />);
}

export default Component;
