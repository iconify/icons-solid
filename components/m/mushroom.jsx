import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngmv18w1m.css';
import '../../css/r/ri06eqb4t.css';
import '../../css/c/cyeuk8_pn.css';
import '../../css/y/yaiayubns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ngmv18w1m"/><path class="ri06eqb4t"/><path class="cyeuk8_pn"/><path class="yaiayubns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mushroom"} {...others} />);
}

export default Component;
