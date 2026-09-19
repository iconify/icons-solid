import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phqj96tym.css';
import '../../css/j/ji09qr2cx.css';
import '../../css/w/wv7su1lfa.css';
import '../../css/x/xgjkm15lq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="phqj96tym"/><path class="ji09qr2cx"/><circle class="wv7su1lfa"/><circle class="xgjkm15lq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:remote-control-one"} {...others} />);
}

export default Component;
