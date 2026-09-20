import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxgh_ybwj.css';
import '../../css/x/xhhk44bxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mxgh_ybwj"/><path class="xhhk44bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shrub"} {...others} />);
}

export default Component;
