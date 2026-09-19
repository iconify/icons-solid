import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzsdgpbbo.css';
import '../../css/h/hw92yybbn.css';
import '../../css/n/nestvlb0s.css';
import '../../css/x/xi25rhb2u.css';
import '../../css/m/mjhy7iw7h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rzsdgpbbo"/><path class="hw92yybbn"/><path class="nestvlb0s"/><path class="xi25rhb2u"/><path class="mjhy7iw7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pangle"} {...others} />);
}

export default Component;
