import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0tg29byf.css';
import '../../css/u/uy3553_vn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r0tg29byf"/><path class="uy3553_vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:core-sample-48-bold"} {...others} />);
}

export default Component;
