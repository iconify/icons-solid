import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umhq261qv.css';
import '../../css/j/jfwt8nbsc.css';
import '../../css/q/qmgqeka6o.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="umhq261qv"/><path class="jfwt8nbsc"/><path class="qmgqeka6o"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-plus-48-bold"} {...others} />);
}

export default Component;
