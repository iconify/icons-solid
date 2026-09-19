import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfcgfdhdl.css';
import '../../css/r/rlckgj5ga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="vfcgfdhdl"/><path class="rlckgj5ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:cpu"} {...others} />);
}

export default Component;
