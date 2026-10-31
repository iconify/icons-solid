import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u0grsjsan.css';
import '../../css/c/ccvet5pco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u0grsjsan"/><path class="ccvet5pco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:locate-duocolor-round"} {...others} />);
}

export default Component;
