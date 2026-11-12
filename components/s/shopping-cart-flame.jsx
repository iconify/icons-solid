import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcn_ur_9p.css';
import '../../css/t/tb313pz2p.css';
import '../../css/a/aa_9aab4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fcn_ur_9p"/><path class="tb313pz2p"/><path class="aa_9aab4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart-flame"} {...others} />);
}

export default Component;
