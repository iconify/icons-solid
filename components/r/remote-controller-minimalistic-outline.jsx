import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqsypxdtv.css';
import '../../css/g/gyxe8j32r.css';
import '../../css/r/rg8vhvbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fqsypxdtv"/><path class="gyxe8j32r"/><path class="rg8vhvbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-outline"} {...others} />);
}

export default Component;
