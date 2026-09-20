import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/s/sjowjbelj.css';
import '../../css/p/pn1j06bwr.css';
import '../../css/k/kzcihjbyg.css';
import '../../css/q/q721goyim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="sjowjbelj"/><path class="pn1j06bwr"/><path class="kzcihjbyg"/><path class="q721goyim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:house-alt"} {...others} />);
}

export default Component;
