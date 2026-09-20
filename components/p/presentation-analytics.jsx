import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h_zubrbnu.css';
import '../../css/f/fjamxrbfg.css';
import '../../css/w/wt23-gdai.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h_zubrbnu"/><path class="fjamxrbfg"/><path class="wt23-gdai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:presentation-analytics"} {...others} />);
}

export default Component;
