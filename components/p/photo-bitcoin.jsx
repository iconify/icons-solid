import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_hes3sdi.css';
import '../../css/f/f2y748k3o.css';
import '../../css/n/nq-mj83lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n_hes3sdi"/><path class="f2y748k3o"/><path class="nq-mj83lp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-bitcoin"} {...others} />);
}

export default Component;
