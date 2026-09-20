import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-sfj2bgs.css';
import '../../css/n/n5c-clmjb.css';

const viewBox = {"width":25,"height":25};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y-sfj2bgs"/><path class="n5c-clmjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:map-marker-5"} {...others} />);
}

export default Component;
