import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbi25pb1n.css';
import '../../css/i/ijb4gt58w.css';
import '../../css/v/vbh2_55tf.css';
import '../../css/n/nt-jk7fef.css';
import '../../css/n/n6d0kus7v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wbi25pb1n"/><path class="ijb4gt58w"/><path class="vbh2_55tf"/><path class="nt-jk7fef"/><path class="n6d0kus7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:methane-48"} {...others} />);
}

export default Component;
