import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vsos4876z.css';
import '../../css/n/n_9y8hjgn.css';
import '../../css/i/iugifwb1o.css';
import '../../css/m/m28tkfzua.css';
import '../../css/q/qme9tbtrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vsos4876z"/><path class="n_9y8hjgn"/><path class="iugifwb1o"/><path class="m28tkfzua"/><path class="qme9tbtrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bug-virus-browser"} {...others} />);
}

export default Component;
