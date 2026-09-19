import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/werljkcpt.css';
import '../../css/k/kt63hcb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="werljkcpt"/><path class="kt63hcb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:shopping-bag"} {...others} />);
}

export default Component;
