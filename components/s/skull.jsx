import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ct5xcv_wg.css';
import '../../css/i/io0ku_jnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ct5xcv_wg"/><path class="io0ku_jnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:skull"} {...others} />);
}

export default Component;
