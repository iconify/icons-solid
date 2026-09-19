import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quh_b7sti.css';
import '../../css/h/h1y4pg1ak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="quh_b7sti"/><path class="h1y4pg1ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:video"} {...others} />);
}

export default Component;
