import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/si8dmxb0q.css';
import '../../css/k/km4h62byp.css';
import '../../css/l/lknytxdlq.css';
import '../../css/b/by61l_1me.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="si8dmxb0q"/><path class="km4h62byp"/><path class="lknytxdlq"/><path class="by61l_1me"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-scale-4"} {...others} />);
}

export default Component;
