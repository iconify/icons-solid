import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nzhoqcmml.css';
import '../../css/v/v9gqdsvmm.css';
import '../../css/c/cfxd4se9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nzhoqcmml"/><path class="v9gqdsvmm"/><path class="cfxd4se9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-first-broken"} {...others} />);
}

export default Component;
