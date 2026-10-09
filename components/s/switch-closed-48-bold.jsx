import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkwabjk_z.css';
import '../../css/e/e268v4bmv.css';
import '../../css/p/py6masfhe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kkwabjk_z"/><path class="e268v4bmv"/><path class="py6masfhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-closed-48-bold"} {...others} />);
}

export default Component;
