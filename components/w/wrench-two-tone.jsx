import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nu6qh3bcr.css';
import '../../css/d/de5ojmegz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nu6qh3bcr"/><path class="de5ojmegz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wrench-two-tone"} {...others} />);
}

export default Component;
