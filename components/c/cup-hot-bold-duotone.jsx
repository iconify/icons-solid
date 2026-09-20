import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/earrbj3fg.css';
import '../../css/m/mf-bwtqvv.css';
import '../../css/e/euehnt70u.css';
import '../../css/k/k36k424ts.css';
import '../../css/i/i8oxa2v3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="earrbj3fg"/><path class="mf-bwtqvv"/><path class="euehnt70u"/><path class="k36k424ts"/></g><path clip-rule="evenodd" class="i8oxa2v3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-bold-duotone"} {...others} />);
}

export default Component;
