import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i0tm_6p0q.css';
import '../../css/b/bvpe1-nac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i0tm_6p0q"/><path class="bvpe1-nac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-2-horizontal-end-duotone"} {...others} />);
}

export default Component;
