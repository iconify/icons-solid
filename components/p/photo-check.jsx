import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea4hx2bih.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/q/qf20nh9zn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ea4hx2bih"/><path class="hn7lp_bzn"/><path class="qf20nh9zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-check"} {...others} />);
}

export default Component;
