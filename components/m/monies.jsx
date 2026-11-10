import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypztn-bvt.css';
import '../../css/o/oil8-obhw.css';
import '../../css/k/kxbce2bfv.css';
import '../../css/r/rvrvp6b6v.css';
import '../../css/w/wwain4bch.css';
import '../../css/i/ingqmjb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ypztn-bvt"/><path class="oil8-obhw"/><path class="kxbce2bfv"/><path class="rvrvp6b6v"/><circle class="wwain4bch"/><path class="ingqmjb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:monies"} {...others} />);
}

export default Component;
