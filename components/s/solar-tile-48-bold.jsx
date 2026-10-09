import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if62vfbxx.css';
import '../../css/p/plv6-ib2c.css';
import '../../css/q/qmu5z8fin.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="if62vfbxx"/><path class="plv6-ib2c"/><path class="qmu5z8fin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tile-48-bold"} {...others} />);
}

export default Component;
