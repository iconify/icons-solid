import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulbgvyh1o.css';
import '../../css/m/md286fbip.css';
import '../../css/o/os1s_jbru.css';
import '../../css/q/q7o01wbuj.css';
import '../../css/m/ml_vzybbu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ulbgvyh1o"/><g class="md286fbip"><path class="os1s_jbru"/><path class="q7o01wbuj"/><path class="ml_vzybbu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gmt"} {...others} />);
}

export default Component;
