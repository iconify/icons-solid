import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe97cg-lx.css';
import '../../css/g/g5c1swb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qe97cg-lx"/><path class="g5c1swb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:area-chart"} {...others} />);
}

export default Component;
