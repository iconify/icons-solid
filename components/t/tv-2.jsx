import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wneoubc6n.css';
import '../../css/r/r8-cjywgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wneoubc6n"/><rect class="r8-cjywgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tv-2"} {...others} />);
}

export default Component;
