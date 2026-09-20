import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kpiqdm7bb.css';
import '../../css/v/v5hm_7btk.css';
import '../../css/j/jqs667m0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kpiqdm7bb"/><path class="v5hm_7btk"/><path class="jqs667m0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-right-down"} {...others} />);
}

export default Component;
