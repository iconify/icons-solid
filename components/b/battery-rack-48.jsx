import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2w95jbjb.css';
import '../../css/d/dfk-rnbho.css';
import '../../css/a/abct7yz6h.css';
import '../../css/p/pxnyocd1e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u2w95jbjb"/><path class="dfk-rnbho"/><path class="abct7yz6h"/><path class="pxnyocd1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-rack-48"} {...others} />);
}

export default Component;
