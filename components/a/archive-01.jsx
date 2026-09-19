import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8h7-ewjn.css';
import '../../css/u/u2pzo1b5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8h7-ewjn"/><path class="u2pzo1b5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-01"} {...others} />);
}

export default Component;
