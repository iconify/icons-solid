import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yajhtab_g.css';
import '../../css/o/osof7mbva.css';
import '../../css/l/lhz5vf86h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yajhtab_g"/><path class="osof7mbva"/><path class="lhz5vf86h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-up-left"} {...others} />);
}

export default Component;
