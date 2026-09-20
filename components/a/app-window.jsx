import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/k/k6ea3dbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><path class="k6ea3dbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:app-window"} {...others} />);
}

export default Component;
