import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x929m5bdg.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/o/o7_4r5bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x929m5bdg"/><path class="hn7lp_bzn"/><path class="o7_4r5bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-exclamation"} {...others} />);
}

export default Component;
