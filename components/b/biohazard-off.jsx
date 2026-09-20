import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bl3rrbclu.css';
import '../../css/j/joznk2bze.css';
import '../../css/v/vhm0j7bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bl3rrbclu"/><path class="joznk2bze"/><path class="vhm0j7bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:biohazard-off"} {...others} />);
}

export default Component;
