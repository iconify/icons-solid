import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovsz64b4d.css';
import '../../css/x/x46njsebn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ovsz64b4d"/><path class="x46njsebn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-barrage-48"} {...others} />);
}

export default Component;
