import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bezk08bnz.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/t/tu-453b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bezk08bnz"/><path class="hn7lp_bzn"/><path class="tu-453b3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-minus"} {...others} />);
}

export default Component;
