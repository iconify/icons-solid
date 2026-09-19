import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g0b0k3bvq.css';
import '../../css/v/v8r4wescz.css';
import '../../css/f/flinjuzmh.css';
import '../../css/o/ogva77b5b.css';
import '../../css/w/wy_v5ldif.css';
import '../../css/i/iug-1eb7z.css';
import '../../css/w/wjka5kqap.css';
import '../../css/j/jfcunlboq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="g0b0k3bvq"/><rect class="v8r4wescz"/><path class="flinjuzmh"/><path class="ogva77b5b"/><path class="wy_v5ldif"/><path class="iug-1eb7z"/><path class="wjka5kqap"/><path class="jfcunlboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bedside"} {...others} />);
}

export default Component;
