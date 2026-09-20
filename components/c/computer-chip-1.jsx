import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/jb529cc9m.css';
import '../../css/l/l3t5aobdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="jb529cc9m"/><path class="l3t5aobdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:computer-chip-1"} {...others} />);
}

export default Component;
