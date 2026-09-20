import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7n3vqbmr.css';
import '../../css/d/d9f73pbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x7n3vqbmr"/><path class="d9f73pbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-end-percent"} {...others} />);
}

export default Component;
