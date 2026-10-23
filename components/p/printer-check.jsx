import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uowibjbpy.css';
import '../../css/s/srqeaxbpb.css';
import '../../css/k/kbrpcacvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uowibjbpy"/><path class="srqeaxbpb"/><path class="kbrpcacvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:printer-check"} {...others} />);
}

export default Component;
