import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz4lvb0-v.css';
import '../../css/r/rhpsudj_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yz4lvb0-v"/><path class="rhpsudj_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-shekel"} {...others} />);
}

export default Component;
