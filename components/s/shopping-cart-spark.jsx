import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcn_ur_9p.css';
import '../../css/n/ndd5-3b3t.css';
import '../../css/s/shor9_b0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fcn_ur_9p"/><path class="ndd5-3b3t"/><path class="shor9_b0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart-spark"} {...others} />);
}

export default Component;
