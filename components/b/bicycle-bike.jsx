import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rt3mf04ij.css';
import '../../css/w/wkvg7xb3u.css';
import '../../css/z/z3to9pb5a.css';
import '../../css/m/mmbyl2bji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rt3mf04ij"/><path class="wkvg7xb3u"/><path class="z3to9pb5a"/><path class="mmbyl2bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bicycle-bike"} {...others} />);
}

export default Component;
