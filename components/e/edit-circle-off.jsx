import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzv_--b6p.css';
import '../../css/b/bm58psb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dzv_--b6p"/><path class="bm58psb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:edit-circle-off"} {...others} />);
}

export default Component;
