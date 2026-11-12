import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lws_a6b-r.css';
import '../../css/m/mjgilzb0i.css';
import '../../css/b/bpf0ulbhx.css';
import '../../css/q/qydmj7flb.css';
import '../../css/j/jxteowbev.css';
import '../../css/w/wvc3ybbip.css';
import '../../css/d/dhi-t2w2x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lws_a6b-r"/><path class="mjgilzb0i"/><path class="bpf0ulbhx"/><path class="qydmj7flb"/><path class="jxteowbev"/><path class="wvc3ybbip"/><path class="dhi-t2w2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpeek-light"} {...others} />);
}

export default Component;
