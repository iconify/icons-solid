import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s_8w0_byo.css';
import '../../css/w/w2k982bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s_8w0_byo"/><path class="w2k982bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cylinder-plus"} {...others} />);
}

export default Component;
