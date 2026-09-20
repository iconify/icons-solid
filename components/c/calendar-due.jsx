import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k92fbmb_j.css';
import '../../css/b/ben_xoqbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k92fbmb_j"/><path class="ben_xoqbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-due"} {...others} />);
}

export default Component;
