import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-i-xre-c.css';
import '../../css/s/s5gq54q3f.css';
import '../../css/q/qgkct-b5f.css';
import '../../css/t/tnc3_2b7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-i-xre-c"/><path class="s5gq54q3f"/><path class="qgkct-b5f"/><path class="tnc3_2b7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mario"} {...others} />);
}

export default Component;
