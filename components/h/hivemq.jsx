import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbxra6t0y.css';
import '../../css/s/sm4k7rbaa.css';
import '../../css/m/mg66m1bfw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbxra6t0y"/><path class="sm4k7rbaa"/><path class="mg66m1bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hivemq"} {...others} />);
}

export default Component;
