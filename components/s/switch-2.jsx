import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzkl3l1di.css';
import '../../css/o/osc21kbyx.css';
import '../../css/a/ajx95yo6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wzkl3l1di"/><path class="osc21kbyx"/><path class="ajx95yo6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:switch-2"} {...others} />);
}

export default Component;
