import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h50fbvbaq.css';
import '../../css/s/s865nktrb.css';
import '../../css/g/gg-w76gso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h50fbvbaq"/><path class="s865nktrb"/><path class="gg-w76gso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transform-point-bottom-left"} {...others} />);
}

export default Component;
