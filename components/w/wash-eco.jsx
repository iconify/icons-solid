import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zuymrfbzp.css';
import '../../css/r/reblu44ca.css';
import '../../css/v/v41nt6s4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zuymrfbzp"/><path class="reblu44ca"/><path class="v41nt6s4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-eco"} {...others} />);
}

export default Component;
