import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/i/ijx6_9_ho.css';
import '../../css/q/qj1xicbfz.css';
import '../../css/l/ljmmiybfc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="ijx6_9_ho"/><path class="qj1xicbfz"/><path class="ljmmiybfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bytedance-mini-app"} {...others} />);
}

export default Component;
