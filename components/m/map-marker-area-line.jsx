import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tr_5cybnu.css';
import '../../css/k/kbiba4bgc.css';
import '../../css/a/an4w8gbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tr_5cybnu"/><path class="kbiba4bgc"/><circle class="an4w8gbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:map-marker-area-line"} {...others} />);
}

export default Component;
