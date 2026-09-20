import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txs954bxf.css';
import '../../css/d/dd8sin71m.css';
import '../../css/f/fe67nnrks.css';
import '../../css/q/qr-ydnawt.css';
import '../../css/b/becuijboh.css';
import '../../css/m/mod39rb_g.css';
import '../../css/v/vqnw5n9wp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="txs954bxf"/><path class="dd8sin71m"/><path class="fe67nnrks"/><path class="qr-ydnawt"/><path class="becuijboh"/><path class="mod39rb_g"/><path class="vqnw5n9wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openccu-dark"} {...others} />);
}

export default Component;
