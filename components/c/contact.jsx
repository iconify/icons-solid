import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mx8mj1ars.css';
import '../../css/n/nnz57yw6o.css';
import '../../css/b/bu3vusbze.css';
import '../../css/a/anfu-u_2j.css';
import '../../css/q/qk63ce3jd.css';
import '../../css/c/cdw3f_mkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mx8mj1ars wm-shadow"/><path class="nnz57yw6o"/><path class="bu3vusbze"/><path class="anfu-u_2j"/><path class="qk63ce3jd"/><path class="cdw3f_mkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:contact"} {...others} />);
}

export default Component;
