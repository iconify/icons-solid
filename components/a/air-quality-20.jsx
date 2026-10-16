import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy2bf7d2l.css';
import '../../css/x/xr0hl1ndv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xy2bf7d2l"/><path class="xr0hl1ndv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-quality-20"} {...others} />);
}

export default Component;
