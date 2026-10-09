import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/l/lu4zihdbk.css';
import '../../css/m/mg7ihkb7k.css';
import '../../css/d/d-rurg29d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="lu4zihdbk"/><path class="mg7ihkb7k"/><path class="d-rurg29d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-snowflake-48"} {...others} />);
}

export default Component;
