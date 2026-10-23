import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lu7odfbpn.css';
import '../../css/b/bpcd-l6qz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lu7odfbpn"/><path class="bpcd-l6qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:star-check"} {...others} />);
}

export default Component;
