import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znhcflbhe.css';
import '../../css/l/lzezlv4aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="znhcflbhe"/><path class="lzezlv4aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:solar-panel-duocolor-round"} {...others} />);
}

export default Component;
