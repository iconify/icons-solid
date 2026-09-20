import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h1a9_kbwo.css';
import '../../css/h/hajvu_ngz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h1a9_kbwo"/><path class="hajvu_ngz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:4k-linear"} {...others} />);
}

export default Component;
