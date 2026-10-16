import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su8djsbpl.css';
import '../../css/p/p3d2yabbm.css';
import '../../css/z/zcn-sxbli.css';
import '../../css/f/f39wppbjw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="su8djsbpl"/><path class="p3d2yabbm"/><path class="zcn-sxbli"/><path class="f39wppbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wire-stripper-48-bold"} {...others} />);
}

export default Component;
