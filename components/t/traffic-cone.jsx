import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3xs33sac.css';
import '../../css/v/vmndxib7n.css';
import '../../css/l/lo58v5b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l3xs33sac"/><path class="vmndxib7n"/><path class="lo58v5b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:traffic-cone"} {...others} />);
}

export default Component;
