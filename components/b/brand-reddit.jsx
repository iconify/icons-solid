import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhj41lbdb.css';
import '../../css/m/m66t7tb1e.css';
import '../../css/p/pl4zspb1h.css';
import '../../css/j/jf_r7ebtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jhj41lbdb"/><path class="m66t7tb1e"/><path class="pl4zspb1h"/><path class="jf_r7ebtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-reddit"} {...others} />);
}

export default Component;
