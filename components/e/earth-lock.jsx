import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz1j5_vyb.css';
import '../../css/g/gbw7dvbeh.css';
import '../../css/d/dydq24bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cz1j5_vyb"/><path class="gbw7dvbeh"/><rect class="dydq24bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:earth-lock"} {...others} />);
}

export default Component;
