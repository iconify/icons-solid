import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/n/nn47u2bzl.css';
import '../../css/t/t81_2yz7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="nn47u2bzl"/><path class="t81_2yz7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart-pause"} {...others} />);
}

export default Component;
