import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zbzzydv6b.css';
import '../../css/y/yd_68bpur.css';
import '../../css/m/m5xkc5i3u.css';
import '../../css/s/swjk84b8u.css';
import '../../css/i/ie8cltztn.css';
import '../../css/g/gt0xdib9t.css';
import '../../css/n/nc_fbpbyq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="zbzzydv6b"/><rect class="yd_68bpur"/><path class="m5xkc5i3u"/><path class="swjk84b8u"/><path class="ie8cltztn"/><path class="gt0xdib9t"/><path class="nc_fbpbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bank-card-one"} {...others} />);
}

export default Component;
