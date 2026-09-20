import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn26p45iq.css';
import '../../css/c/c5j51tvvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xn26p45iq"/><path class="c5j51tvvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:golf"} {...others} />);
}

export default Component;
