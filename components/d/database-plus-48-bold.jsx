import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2ioum2-g.css';
import '../../css/k/k7bxcbctl.css';
import '../../css/z/z34g1fbbc.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2ioum2-g"/><path class="k7bxcbctl"/><path class="z34g1fbbc"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-plus-48-bold"} {...others} />);
}

export default Component;
