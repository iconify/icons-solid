import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y29zj0kgy.css';
import '../../css/w/wlsuajbmd.css';
import '../../css/e/evx30ej3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y29zj0kgy"/><path class="wlsuajbmd"/><path class="evx30ej3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:flower-tulip"} {...others} />);
}

export default Component;
