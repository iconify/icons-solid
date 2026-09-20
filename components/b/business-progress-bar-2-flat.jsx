import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2nefrr1w.css';
import '../../css/r/rbkf42bgn.css';
import '../../css/g/gv48xt2yw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u2nefrr1w"/><path clip-rule="evenodd" class="rbkf42bgn"/><path class="gv48xt2yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:business-progress-bar-2-flat"} {...others} />);
}

export default Component;
