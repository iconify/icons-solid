import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9g01n1mp.css';
import '../../css/t/t5t7eg3cu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u9g01n1mp"/><path class="t5t7eg3cu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:id-badge-off"} {...others} />);
}

export default Component;
