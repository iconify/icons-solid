import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kpg7o_brl.css';
import '../../css/a/as_5d5b2x.css';
import '../../css/p/pq-94fbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kpg7o_brl"/><path class="as_5d5b2x"/><rect class="pq-94fbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-lock"} {...others} />);
}

export default Component;
