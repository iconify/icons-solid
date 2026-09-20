import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pt93twbsc.css';
import '../../css/w/wv5f_1brg.css';
import '../../css/d/dsp6khz0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pt93twbsc"/><circle class="wv5f_1brg"/><path class="dsp6khz0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:anchor"} {...others} />);
}

export default Component;
