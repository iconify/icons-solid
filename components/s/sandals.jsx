import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n6n82mehs.css';
import '../../css/k/kh_xhg-qp.css';
import '../../css/k/kvqu1si6b.css';
import '../../css/l/l5he8sbop.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="n6n82mehs"/><path class="kh_xhg-qp"/><path class="kvqu1si6b"/><path class="l5he8sbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sandals"} {...others} />);
}

export default Component;
