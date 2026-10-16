import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnw5nvftm.css';
import '../../css/q/q177d-m0y.css';
import '../../css/h/h7hp1q67c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lnw5nvftm"/><path class="q177d-m0y"/><path class="h7hp1q67c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressor-48"} {...others} />);
}

export default Component;
