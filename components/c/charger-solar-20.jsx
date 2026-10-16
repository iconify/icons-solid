import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z76gmk76o.css';
import '../../css/q/qog7c2b7a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z76gmk76o"/><path class="qog7c2b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-solar-20"} {...others} />);
}

export default Component;
