import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-8a7dbrh.css';
import '../../css/k/kungq2u6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y-8a7dbrh"/><path class="kungq2u6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-sankey"} {...others} />);
}

export default Component;
