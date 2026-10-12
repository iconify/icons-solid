import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k150lj2rb.css';
import '../../css/t/t-ars3bhu.css';
import '../../css/e/e0rqc4ysb.css';
import '../../css/e/euo8kyimj.css';
import '../../css/f/f3y_gabnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k150lj2rb"/><path class="t-ars3bhu"/><path class="e0rqc4ysb"/><path class="euo8kyimj"/><path class="f3y_gabnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:umbrella"} {...others} />);
}

export default Component;
