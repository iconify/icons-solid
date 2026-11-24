import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t57kox8ac.css';
import '../../css/f/fmf1og6np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t57kox8ac"/><path class="fmf1og6np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-hospital-pin"} {...others} />);
}

export default Component;
