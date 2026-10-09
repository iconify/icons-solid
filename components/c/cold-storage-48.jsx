import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lji_pzt1f.css';
import '../../css/y/ymlv-kbac.css';
import '../../css/m/mg7ihkb7k.css';
import '../../css/d/d-rurg29d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lji_pzt1f"/><path class="ymlv-kbac"/><path class="mg7ihkb7k"/><path class="d-rurg29d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cold-storage-48"} {...others} />);
}

export default Component;
