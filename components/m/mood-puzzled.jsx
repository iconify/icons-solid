import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uykoewb1o.css';
import '../../css/t/ts8brxb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uykoewb1o"/><path class="ts8brxb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-puzzled"} {...others} />);
}

export default Component;
