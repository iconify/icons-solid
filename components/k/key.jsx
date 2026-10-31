import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ferzg1j3i.css';
import '../../css/m/mcvn_lbhc.css';
import '../../css/u/u793uy5pd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ferzg1j3i"/><path class="mcvn_lbhc"/><path class="u793uy5pd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:key"} {...others} />);
}

export default Component;
