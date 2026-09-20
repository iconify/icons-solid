import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9awzirct.css';
import '../../css/k/k-lz5j2em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y9awzirct"/><path class="k-lz5j2em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dog-bowl"} {...others} />);
}

export default Component;
