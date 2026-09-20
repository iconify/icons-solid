import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5418ebau.css';
import '../../css/s/swuso9b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l5418ebau"/><path class="swuso9b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-bag-duotone"} {...others} />);
}

export default Component;
