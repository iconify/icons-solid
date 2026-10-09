import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp6r5wbyh.css';
import '../../css/g/gtr6zk6db.css';
import '../../css/d/dl_nt7bof.css';
import '../../css/y/ydacol75i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dp6r5wbyh"/><path class="gtr6zk6db"/><path class="dl_nt7bof"/><path class="ydacol75i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motorcycle-48"} {...others} />);
}

export default Component;
