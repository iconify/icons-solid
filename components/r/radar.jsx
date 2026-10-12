import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxom9tmkx.css';
import '../../css/o/ork2gqbpx.css';
import '../../css/x/xgafwobgl.css';
import '../../css/u/uxo9gqbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bxom9tmkx"/><path class="ork2gqbpx"/><circle class="xgafwobgl"/><path class="uxo9gqbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:radar"} {...others} />);
}

export default Component;
