import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vpst-w2dv.css';
import '../../css/o/obphd_b_m.css';
import '../../css/i/ixlpo7bwo.css';
import '../../css/h/hbscqzbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vpst-w2dv"/><path class="obphd_b_m"/><path class="ixlpo7bwo"/><path class="hbscqzbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-sparkles"} {...others} />);
}

export default Component;
