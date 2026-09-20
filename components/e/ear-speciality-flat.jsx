import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awfxc6buj.css';
import '../../css/r/rv2_fm4ef.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="awfxc6buj"/><path clip-rule="evenodd" class="rv2_fm4ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ear-speciality-flat"} {...others} />);
}

export default Component;
