import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/uer6m9f-g.css';
import '../../css/x/xibl8tbry.css';
import '../../css/r/r0hy1yguj.css';
import '../../css/j/jbw0c7hnt.css';
import '../../css/i/itf-zacqz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="uer6m9f-g"/><path class="xibl8tbry"/><path class="r0hy1yguj"/><path class="jbw0c7hnt"/><path class="itf-zacqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-dimensional-code"} {...others} />);
}

export default Component;
