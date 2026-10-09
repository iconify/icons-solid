import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmvxxq8gs.css';
import '../../css/h/hp5tah2eg.css';
import '../../css/y/yjd0h8bmh.css';
import '../../css/o/og4walbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nmvxxq8gs"/><path class="hp5tah2eg"/><path class="yjd0h8bmh"/><path class="og4walbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomass-48-bold"} {...others} />);
}

export default Component;
