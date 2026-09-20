import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ct-itjb4z.css';
import '../../css/f/fjjzljbgt.css';

const viewBox = {"width":124.4,"height":64};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ct-itjb4z"/><path class="fjjzljbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:austrian-airlines"} {...others} />);
}

export default Component;
