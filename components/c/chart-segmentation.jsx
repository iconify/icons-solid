import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v276xibbz.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/k/kqbymubhs.css';
import '../../css/v/vu_cz2bpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v276xibbz"/><circle class="bt9-2rbpz"/><path class="kqbymubhs"/><path class="vu_cz2bpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-segmentation"} {...others} />);
}

export default Component;
