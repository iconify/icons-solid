import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zqbpy6boz.css';
import '../../css/z/zuoznrbss.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="zqbpy6boz"/><path class="zuoznrbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:slider-round-1"} {...others} />);
}

export default Component;
