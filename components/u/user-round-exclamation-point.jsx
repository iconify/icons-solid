import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4ey7kvtq.css';
import '../../css/q/qcs_7qqsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p4ey7kvtq"/><circle class="qcs_7qqsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round-exclamation-point"} {...others} />);
}

export default Component;
