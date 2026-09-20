import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kth1skbvq.css';
import '../../css/r/rupc0hv-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kth1skbvq"/><path class="rupc0hv-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:balloon"} {...others} />);
}

export default Component;
