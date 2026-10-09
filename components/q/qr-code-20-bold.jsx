import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwd41ubru.css';
import '../../css/r/rp4u3sbxm.css';
import '../../css/g/gfzae_buv.css';
import '../../css/z/zery2jbhk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dwd41ubru"/><path class="rp4u3sbxm"/><path class="gfzae_buv"/><path class="zery2jbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:qr-code-20-bold"} {...others} />);
}

export default Component;
