import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-747lbuo.css';
import '../../css/c/c842s0bva.css';
import '../../css/j/jo9weebwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k-747lbuo"/><path class="c842s0bva"/><path class="jo9weebwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-ubuntu"} {...others} />);
}

export default Component;
