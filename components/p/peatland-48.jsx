import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za30h5bbb.css';
import '../../css/n/no53kdbqh.css';
import '../../css/l/lr5jr9ons.css';
import '../../css/x/xopzt8bhb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="za30h5bbb"/><path class="no53kdbqh"/><path class="lr5jr9ons"/><path class="xopzt8bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peatland-48"} {...others} />);
}

export default Component;
