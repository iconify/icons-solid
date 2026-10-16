import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeigp0whd.css';
import '../../css/z/z1rjnvbix.css';
import '../../css/r/r-ouyob9n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xeigp0whd"/><path class="z1rjnvbix"/><path class="r-ouyob9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pcb-48-bold"} {...others} />);
}

export default Component;
