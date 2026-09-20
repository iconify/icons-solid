import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxuit9pfo.css';
import '../../css/o/oqmenpqsw.css';
import '../../css/v/vdz4o3b3b.css';
import '../../css/u/ujg-f0isq.css';
import '../../css/b/by7wqhbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xxuit9pfo"/><path class="oqmenpqsw"/><path class="vdz4o3b3b"/><path class="ujg-f0isq"/><path class="by7wqhbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-suitcase-2"} {...others} />);
}

export default Component;
