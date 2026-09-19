import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r3uyncqxs.css';
import '../../css/d/dyzltge-g.css';
import '../../css/r/rqniv96bp.css';
import '../../css/m/m9c61dktf.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r3uyncqxs"/><path class="dyzltge-g"/><path class="rqniv96bp"/><path class="m9c61dktf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medical-sample2x-outline"} {...others} />);
}

export default Component;
