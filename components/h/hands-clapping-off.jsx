import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xd7wlcbwg.css';
import '../../css/o/oci26qbit.css';
import '../../css/i/io5yrcbsn.css';
import '../../css/a/affcjmbis.css';
import '../../css/s/swt7_sbuj.css';
import '../../css/o/o196lqb3j.css';
import '../../css/n/n-_0urbsa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="xd7wlcbwg"/><path class="oci26qbit"/><path class="io5yrcbsn"/><path class="affcjmbis"/><path class="swt7_sbuj"/><path class="o196lqb3j"/><path class="n-_0urbsa"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hands-clapping-off"} {...others} />);
}

export default Component;
