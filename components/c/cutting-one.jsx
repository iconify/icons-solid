import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xt6hc6emd.css';
import '../../css/h/hq6s1abpk.css';
import '../../css/u/u4vnq1bcb.css';
import '../../css/n/ngr-1z1cz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="xt6hc6emd"/><path class="hq6s1abpk"/><path class="u4vnq1bcb"/><path class="ngr-1z1cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cutting-one"} {...others} />);
}

export default Component;
