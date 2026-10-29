import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cu5sd_z2y.css';
import '../../css/n/n1_uotg6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cu5sd_z2y"/><path class="n1_uotg6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:alarm-clock-check"} {...others} />);
}

export default Component;
