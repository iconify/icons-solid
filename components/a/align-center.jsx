import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rojlq5bdw.css';
import '../../css/p/ppdpuzbds.css';
import '../../css/p/p8xca0b7c.css';
import '../../css/v/vu88byegq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rojlq5bdw"/><path class="ppdpuzbds"/><path class="p8xca0b7c"/><path class="vu88byegq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:align-center"} {...others} />);
}

export default Component;
