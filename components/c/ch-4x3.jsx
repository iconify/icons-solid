import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/l/lbq_y8bzz.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/edsn48boz.css';
import '../../css/g/gzr-zob0i.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="lbq_y8bzz"/><g class="n1mjunbsu"><path class="edsn48boz"/><path class="gzr-zob0i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ch-4x3"} {...others} />);
}

export default Component;
