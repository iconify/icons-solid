import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk_c-dokx.css';
import '../../css/n/n_gm4-i7n.css';
import '../../css/a/aim0ujbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="sk_c-dokx"/><path class="n_gm4-i7n"/><path class="aim0ujbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:accessibility"} {...others} />);
}

export default Component;
