import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu8n2uq5t.css';
import '../../css/r/r8rvkkb1c.css';
import '../../css/n/n48ro9d0t.css';
import '../../css/b/b4kxn7twd.css';
import '../../css/p/prdcoipkx.css';
import '../../css/g/gsn16rx_z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lu8n2uq5t"/><path class="r8rvkkb1c"/><path class="n48ro9d0t"/><path class="b4kxn7twd"/><path class="prdcoipkx"/><path class="gsn16rx_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpad-light"} {...others} />);
}

export default Component;
