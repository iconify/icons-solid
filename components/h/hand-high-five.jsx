import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scsebab7g.css';
import '../../css/y/ympuekv6p.css';
import '../../css/v/v0irmxb4m.css';
import '../../css/b/b09e7qg2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="scsebab7g"/><path class="ympuekv6p"/><path class="v0irmxb4m"/><path class="b09e7qg2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-high-five"} {...others} />);
}

export default Component;
