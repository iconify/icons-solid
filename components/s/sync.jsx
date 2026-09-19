import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/k0nmi6med.css';
import '../../css/n/nlrhegbqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="k0nmi6med"/><path class="nlrhegbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sync"} {...others} />);
}

export default Component;
