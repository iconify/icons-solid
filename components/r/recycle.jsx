import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq2vn7bgu.css';
import '../../css/d/d1sm-wb6c.css';
import '../../css/k/kz0zpobfk.css';
import '../../css/u/u_sd4s4wm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jq2vn7bgu"/><path class="d1sm-wb6c"/><path class="kz0zpobfk"/><path class="u_sd4s4wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:recycle"} {...others} />);
}

export default Component;
