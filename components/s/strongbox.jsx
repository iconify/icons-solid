import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdz3rxb1o.css';
import '../../css/n/n9-t5ixox.css';
import '../../css/g/g108flszz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kdz3rxb1o"/><path class="n9-t5ixox"/><path class="g108flszz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:strongbox"} {...others} />);
}

export default Component;
