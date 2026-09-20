import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zwkxz3odb.css';
import '../../css/a/a_e_k51qy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zwkxz3odb"/><path class="a_e_k51qy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-star"} {...others} />);
}

export default Component;
