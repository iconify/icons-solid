import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8nur_b4z.css';
import '../../css/v/vsru03jnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c8nur_b4z"/><path class="vsru03jnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:subscript-duocolor-round"} {...others} />);
}

export default Component;
