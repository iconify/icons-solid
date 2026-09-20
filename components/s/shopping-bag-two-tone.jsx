import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5418ebau.css';
import '../../css/l/l-hh_1b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l5418ebau"/><path class="l-hh_1b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-bag-two-tone"} {...others} />);
}

export default Component;
