import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/n/ni50ofboa.css';
import '../../css/l/luxlqfrxi.css';
import '../../css/v/v56dgzb1x.css';
import '../../css/s/sgrmctbfl.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)"><circle class="ni50ofboa"/><path class="luxlqfrxi"/><path class="v56dgzb1x"/><path class="sgrmctbfl"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-spin-circle-off"} {...others} />);
}

export default Component;
