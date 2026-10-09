import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdos38jip.css';
import '../../css/p/p1kcgj3tk.css';
import '../../css/y/ywhth4bre.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdos38jip"/><path class="p1kcgj3tk"/><path class="ywhth4bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-plus-48-bold"} {...others} />);
}

export default Component;
