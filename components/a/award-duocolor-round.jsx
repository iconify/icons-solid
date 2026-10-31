import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lx_5dtbzi.css';
import '../../css/w/wxe2_ouwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lx_5dtbzi"/><path class="wxe2_ouwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:award-duocolor-round"} {...others} />);
}

export default Component;
