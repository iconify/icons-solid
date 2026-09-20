import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cdz5eh_jl.css';
import '../../css/j/jab4ynbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cdz5eh_jl"/><path class="jab4ynbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-bolt"} {...others} />);
}

export default Component;
