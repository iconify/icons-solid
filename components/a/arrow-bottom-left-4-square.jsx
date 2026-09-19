import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/n/n2chw_qru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vkur1dxhw"/><path class="n2chw_qru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-bottom-left-4-square"} {...others} />);
}

export default Component;
