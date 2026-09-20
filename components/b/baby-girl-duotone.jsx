import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/m/mfjn8jbeg.css';
import '../../css/u/ud44bbcsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fvyxm7bvs"/><path class="mfjn8jbeg"/><path class="ud44bbcsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-girl-duotone"} {...others} />);
}

export default Component;
