import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/arfkrwtef.css';
import '../../css/g/g7uik6b8a.css';
import '../../css/w/wtzcjzpiz.css';
import '../../css/z/zresm_ybe.css';
import '../../css/a/a_xcsztwq.css';
import '../../css/t/tqh55_boa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="arfkrwtef"/><path class="g7uik6b8a"/><path class="wtzcjzpiz"/><path class="zresm_ybe"/><path class="a_xcsztwq"/><path class="tqh55_boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stopwatch-half"} {...others} />);
}

export default Component;
