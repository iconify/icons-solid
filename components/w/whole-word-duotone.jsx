import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo3he8bkq.css';
import '../../css/u/usm8m5btb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wo3he8bkq"/><path class="usm8m5btb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:whole-word-duotone"} {...others} />);
}

export default Component;
