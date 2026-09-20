import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fafdcgb1i.css';
import '../../css/n/nky9x70wz.css';
import '../../css/h/hwccr7b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fafdcgb1i"/><path class="nky9x70wz"/><path class="hwccr7b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-rock"} {...others} />);
}

export default Component;
