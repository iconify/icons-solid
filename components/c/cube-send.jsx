import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bbktfca2l.css';
import '../../css/t/tkx80kbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bbktfca2l"/><path class="tkx80kbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cube-send"} {...others} />);
}

export default Component;
