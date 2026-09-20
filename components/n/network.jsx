import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxe2_ouwj.css';
import '../../css/t/tx6wwib6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wxe2_ouwj"/><path class="tx6wwib6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:network"} {...others} />);
}

export default Component;
