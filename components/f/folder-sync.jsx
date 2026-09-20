import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b92_qzb7s.css';
import '../../css/z/ziql97jnu.css';
import '../../css/l/lm_ci3bft.css';
import '../../css/m/m7d5a_bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b92_qzb7s"/><path class="ziql97jnu"/><path class="lm_ci3bft"/><path class="m7d5a_bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-sync"} {...others} />);
}

export default Component;
