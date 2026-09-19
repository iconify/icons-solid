import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xl9wbnx-v.css';
import '../../css/b/bm9t00_7o.css';
import '../../css/p/p54glybdm.css';
import '../../css/o/obqo-b0uq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xl9wbnx-v"/><rect class="bm9t00_7o"/><path class="p54glybdm"/><path class="obqo-b0uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:run-left"} {...others} />);
}

export default Component;
