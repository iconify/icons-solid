import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv2ejsbsn.css';
import '../../css/z/zs5hrfbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qv2ejsbsn"/><path class="zs5hrfbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-heart"} {...others} />);
}

export default Component;
