import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p6_k-ebum.css';
import '../../css/h/htjb-9byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p6_k-ebum"/><path class="htjb-9byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folders-fill"} {...others} />);
}

export default Component;
