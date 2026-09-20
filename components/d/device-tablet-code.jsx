import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz97bzbdz.css';
import '../../css/r/r-ueysuzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oz97bzbdz"/><path class="r-ueysuzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-code"} {...others} />);
}

export default Component;
