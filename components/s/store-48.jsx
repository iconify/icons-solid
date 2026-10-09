import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5odp7b0s.css';
import '../../css/a/asas4sbys.css';
import '../../css/q/qc5k0pb3l.css';
import '../../css/d/drd-mi95a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o5odp7b0s"/><path class="asas4sbys"/><path class="qc5k0pb3l"/><path class="drd-mi95a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:store-48"} {...others} />);
}

export default Component;
