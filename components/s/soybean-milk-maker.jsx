import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/td614xh2x.css';
import '../../css/x/xv2a6ybxr.css';
import '../../css/f/fqfemozio.css';
import '../../css/w/withcytnh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="td614xh2x"/><path class="xv2a6ybxr"/><path class="fqfemozio"/><path class="withcytnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:soybean-milk-maker"} {...others} />);
}

export default Component;
