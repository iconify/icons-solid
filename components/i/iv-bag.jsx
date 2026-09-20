import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yf97-ld5v.css';
import '../../css/p/px6sb2bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yf97-ld5v"/><path class="px6sb2bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:iv-bag"} {...others} />);
}

export default Component;
