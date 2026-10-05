import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/ascn122cz.css';
import '../../css/r/r6jly0bva.css';
import '../../css/g/g8qaqv_gb.css';
import '../../css/u/ulldvebzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ascn122cz"/><path class="r6jly0bva"/><path class="g8qaqv_gb"/><path class="ulldvebzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:drafting-compass"} {...others} />);
}

export default Component;
