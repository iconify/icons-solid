import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4mu9pi1w.css';
import '../../css/l/lpuw_j63z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m4mu9pi1w"/><path class="lpuw_j63z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-kako-talk"} {...others} />);
}

export default Component;
