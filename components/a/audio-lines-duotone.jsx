import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zdn9vqbnn.css';
import '../../css/t/trjkit8hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zdn9vqbnn"/><path class="trjkit8hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-duotone"} {...others} />);
}

export default Component;
