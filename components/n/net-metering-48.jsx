import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg3uv7bpl.css';
import '../../css/a/a921hcklm.css';
import '../../css/b/bht55acof.css';
import '../../css/u/um7961b5j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xg3uv7bpl"/><path class="a921hcklm"/><path class="bht55acof"/><path class="um7961b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:net-metering-48"} {...others} />);
}

export default Component;
