import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/olbc_pb1d.css';
import '../../css/l/l5n138ezq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="olbc_pb1d"/><path class="l5n138ezq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:squares-selected"} {...others} />);
}

export default Component;
