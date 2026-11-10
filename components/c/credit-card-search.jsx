import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvbrcnb-r.css';
import '../../css/u/us6vpptzr.css';
import '../../css/p/pd21t8boe.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gvbrcnb-r"/><path class="us6vpptzr"/><path class="pd21t8boe"/><path class="dtkzsnbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-search"} {...others} />);
}

export default Component;
