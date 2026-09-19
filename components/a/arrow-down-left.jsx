import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ntqqlf_wk.css';
import '../../css/m/m0bhoobwp.css';
import '../../css/l/lejiw1pae.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ntqqlf_wk"/><path class="m0bhoobwp"/><path class="lejiw1pae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-down-left"} {...others} />);
}

export default Component;
