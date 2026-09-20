import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iygqaxbee.css';
import '../../css/t/t3w8yqyck.css';
import '../../css/m/ms_pyhbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iygqaxbee"/><path class="t3w8yqyck"/><path class="ms_pyhbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:save-all"} {...others} />);
}

export default Component;
