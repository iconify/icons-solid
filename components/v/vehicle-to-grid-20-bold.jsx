import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxklois4m.css';
import '../../css/t/t_7rprl1m.css';
import '../../css/u/ufn12ktbs.css';
import '../../css/u/uale--bkz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dxklois4m"/><path class="t_7rprl1m"/><path class="ufn12ktbs"/><path class="uale--bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vehicle-to-grid-20-bold"} {...others} />);
}

export default Component;
