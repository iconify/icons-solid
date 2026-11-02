import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gzs_0bb9p.css';
import '../../css/i/i1hguobkj.css';
import '../../css/m/m2n6x-vsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gzs_0bb9p"/><path class="i1hguobkj"/><path class="m2n6x-vsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:surprised"} {...others} />);
}

export default Component;
