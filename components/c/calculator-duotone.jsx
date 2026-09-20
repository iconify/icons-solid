import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7fc_eqhq.css';
import '../../css/s/srz5hiblq.css';
import '../../css/w/wx6aefbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d7fc_eqhq"/><path class="srz5hiblq"/><path class="wx6aefbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calculator-duotone"} {...others} />);
}

export default Component;
