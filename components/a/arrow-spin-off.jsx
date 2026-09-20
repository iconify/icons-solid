import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ni50ofboa.css';
import '../../css/l/luxlqfrxi.css';
import '../../css/v/v56dgzb1x.css';
import '../../css/s/sgrmctbfl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="ni50ofboa"/><path class="luxlqfrxi"/><path class="v56dgzb1x"/><path class="sgrmctbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-spin-off"} {...others} />);
}

export default Component;
