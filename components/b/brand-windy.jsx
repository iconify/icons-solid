import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/on09j4qdn.css';
import '../../css/l/lud7bwb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="on09j4qdn"/><path class="lud7bwb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-windy"} {...others} />);
}

export default Component;
