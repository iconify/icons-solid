import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spvw1m4wo.css';
import '../../css/g/gbci9hyta.css';
import '../../css/e/ej0drdrvm.css';
import '../../css/j/jiw1pkbmf.css';
import '../../css/q/qfb0low_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="spvw1m4wo"/><path class="gbci9hyta"/><path class="ej0drdrvm"/><path class="jiw1pkbmf"/><path class="qfb0low_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-broken"} {...others} />);
}

export default Component;
