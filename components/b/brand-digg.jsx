import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzex7_1cv.css';
import '../../css/n/nk3yy4bsi.css';
import '../../css/i/ib74cjogy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pzex7_1cv"/><path class="nk3yy4bsi"/><path class="ib74cjogy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-digg"} {...others} />);
}

export default Component;
