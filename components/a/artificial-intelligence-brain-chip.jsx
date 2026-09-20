import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0rbkobgm.css';
import '../../css/n/n6j57qbjf.css';
import '../../css/x/x7es_vtri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i0rbkobgm"/><path class="n6j57qbjf"/><path class="x7es_vtri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:artificial-intelligence-brain-chip"} {...others} />);
}

export default Component;
