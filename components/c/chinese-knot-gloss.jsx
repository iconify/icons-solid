import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/be6zp5bxo.css';
import '../../css/k/k3_ezyb6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="be6zp5bxo wm-k"/><path class="k3_ezyb6z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chinese-knot-gloss"} {...others} />);
}

export default Component;
