import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srpel7lyw.css';
import '../../css/x/xw8_zjbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="srpel7lyw"/><path class="xw8_zjbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-right-from-line-duocolor-round"} {...others} />);
}

export default Component;
