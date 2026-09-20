import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iijut148h.css';
import '../../css/v/vgjh9ibgd.css';

const viewBox = {"width":15,"height":15};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iijut148h"/><path class="vgjh9ibgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:certificate-solid"} {...others} />);
}

export default Component;
