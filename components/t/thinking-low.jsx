import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tadzi8bpr.css';
import '../../css/c/cfg02zb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tadzi8bpr"/><path class="cfg02zb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:thinking-low"} {...others} />);
}

export default Component;
