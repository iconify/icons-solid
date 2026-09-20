import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc550qcvm.css';
import '../../css/n/ness8bcxq.css';
import '../../css/m/m10l9ab_g.css';
import '../../css/h/hhllavkac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sc550qcvm"/><path class="ness8bcxq"/><path class="m10l9ab_g"/><path class="hhllavkac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:3d-glasses"} {...others} />);
}

export default Component;
