import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t61yek-hz.css';
import '../../css/y/y5xc95biv.css';
import '../../css/b/bt65bnb4c.css';
import '../../css/l/lsu77ffef.css';
import '../../css/v/vx0njkbru.css';
import '../../css/n/n_cp21btb.css';
import '../../css/p/pdta9ow2s.css';
import '../../css/q/qo0fpzjdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t61yek-hz"/><path class="y5xc95biv"/><path class="bt65bnb4c"/><path class="lsu77ffef"/><path class="vx0njkbru"/><path class="n_cp21btb"/><path class="pdta9ow2s"/><path class="qo0fpzjdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:microphone-jack"} {...others} />);
}

export default Component;
