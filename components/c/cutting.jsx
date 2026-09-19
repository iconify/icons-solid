import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sq685hnjo.css';
import '../../css/q/qzw7xc1cx.css';
import '../../css/l/l_o6mzh0s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sq685hnjo"/><path class="qzw7xc1cx"/><path class="l_o6mzh0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cutting"} {...others} />);
}

export default Component;
