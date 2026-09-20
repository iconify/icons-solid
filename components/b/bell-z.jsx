import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewggps1je.css';
import '../../css/l/l1kafxb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ewggps1je"/><path class="l1kafxb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bell-z"} {...others} />);
}

export default Component;
