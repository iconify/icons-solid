import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gng-dvkui.css';
import '../../css/x/xd7wlcbwg.css';
import '../../css/o/oci26qbit.css';
import '../../css/i/io5yrcbsn.css';
import '../../css/a/affcjmbis.css';
import '../../css/s/swt7_sbuj.css';
import '../../css/o/o196lqb3j.css';
import '../../css/n/n-_0urbsa.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gng-dvkui"/><path class="xd7wlcbwg"/><path class="oci26qbit"/><path class="io5yrcbsn"/><path class="affcjmbis"/><path class="swt7_sbuj"/><path class="o196lqb3j"/><path class="n-_0urbsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hands-clapping"} {...others} />);
}

export default Component;
