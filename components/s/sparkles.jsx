import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tovhbsnai.css';
import '../../css/u/u7qsm5bgl.css';
import '../../css/p/p2z1j9bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="tovhbsnai"/><path class="u7qsm5bgl"/><path class="p2z1j9bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:sparkles"} {...others} />);
}

export default Component;
