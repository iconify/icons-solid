import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sxobkfzzi.css';
import '../../css/k/k-wrf3ppr.css';
import '../../css/g/gbagby-8i.css';
import '../../css/b/bnj4hpocw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sxobkfzzi"/><path class="k-wrf3ppr"/><path class="gbagby-8i"/><path class="bnj4hpocw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:presentation-analytics"} {...others} />);
}

export default Component;
