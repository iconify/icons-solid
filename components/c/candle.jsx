import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa7twqs_h.css';
import '../../css/s/sg0bdz8_g.css';
import '../../css/l/ld_mji7jh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oa7twqs_h"/><path class="sg0bdz8_g"/><path class="ld_mji7jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:candle"} {...others} />);
}

export default Component;
