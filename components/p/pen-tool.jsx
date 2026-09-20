import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj4ytohox.css';
import '../../css/f/fw7d0bkyc.css';
import '../../css/b/bfr3sb7fy.css';
import '../../css/l/ldl6rcc7g.css';
import '../../css/w/wpj290jnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tj4ytohox"/><path class="fw7d0bkyc"/><path class="bfr3sb7fy"/><path class="ldl6rcc7g"/><path class="wpj290jnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pen-tool"} {...others} />);
}

export default Component;
