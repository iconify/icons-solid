import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nqwhu1s7a.css';
import '../../css/o/ox6d5w6du.css';
import '../../css/t/tq2sis96r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="nqwhu1s7a"/><path class="ox6d5w6du"/><path class="tq2sis96r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:local"} {...others} />);
}

export default Component;
