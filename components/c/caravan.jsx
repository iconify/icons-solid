import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5wgb97jk.css';
import '../../css/j/j2fbvgb4b.css';
import '../../css/e/ekwl493ik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r5wgb97jk"/><path class="j2fbvgb4b"/><path class="ekwl493ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:caravan"} {...others} />);
}

export default Component;
