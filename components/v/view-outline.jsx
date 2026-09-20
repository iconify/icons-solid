import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2p-8wbtt.css';
import '../../css/k/kujpmsktd.css';
import '../../css/h/h0ghu0bkc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="w2p-8wbtt"><path class="kujpmsktd"/><path class="h0ghu0bkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:view-outline"} {...others} />);
}

export default Component;
