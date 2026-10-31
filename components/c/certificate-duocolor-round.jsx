import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlhce0b5x.css';
import '../../css/n/ntyt7mipc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tlhce0b5x"/><path class="ntyt7mipc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:certificate-duocolor-round"} {...others} />);
}

export default Component;
