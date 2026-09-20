import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pubb39zck.css';
import '../../css/l/lgi6m3_tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pubb39zck"/><path class="lgi6m3_tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-pin"} {...others} />);
}

export default Component;
