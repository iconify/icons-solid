import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k_po2_bqm.css';
import '../../css/w/wt-8bgbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k_po2_bqm"/><circle class="wt-8bgbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cake-slice"} {...others} />);
}

export default Component;
