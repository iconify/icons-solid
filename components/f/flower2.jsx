import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/em3t5sb7h.css';
import '../../css/n/nisesvbkm.css';
import '../../css/g/gfnze9uwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="em3t5sb7h"/><path class="nisesvbkm"/><path class="gfnze9uwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flower2"} {...others} />);
}

export default Component;
