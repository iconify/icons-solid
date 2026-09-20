import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r_nfbwbpt.css';
import '../../css/n/n41av-8im.css';
import '../../css/g/gk2fecbga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="r_nfbwbpt"/><path class="n41av-8im"/><path class="gk2fecbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:atom"} {...others} />);
}

export default Component;
