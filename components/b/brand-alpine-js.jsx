import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k3l0a5zon.css';
import '../../css/z/zkvi0rb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k3l0a5zon"/><path class="zkvi0rb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-alpine-js"} {...others} />);
}

export default Component;
