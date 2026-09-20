import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lv46fdvld.css';
import '../../css/z/z3g4_cbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lv46fdvld"/><path class="z3g4_cbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sort-duotone"} {...others} />);
}

export default Component;
