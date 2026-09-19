import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w3w5w2bqf.css';
import '../../css/m/mgzxm9bxu.css';
import '../../css/o/od5ee_bsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w3w5w2bqf"/><path class="mgzxm9bxu"/><path class="od5ee_bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rope-skipping-one"} {...others} />);
}

export default Component;
