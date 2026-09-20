import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4srdrbby.css';
import '../../css/k/k__jtcr4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w4srdrbby"/><path class="k__jtcr4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:alarm-clock-check-duotone"} {...others} />);
}

export default Component;
