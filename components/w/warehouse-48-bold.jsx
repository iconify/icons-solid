import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpnvortse.css';
import '../../css/z/zpkef6b1t.css';
import '../../css/r/roy5ebcho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mpnvortse"/><path class="zpkef6b1t"/><path class="roy5ebcho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warehouse-48-bold"} {...others} />);
}

export default Component;
