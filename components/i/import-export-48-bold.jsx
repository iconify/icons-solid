import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ampl8-clf.css';
import '../../css/d/d81cmo-oy.css';
import '../../css/i/ijl0gbtvw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ampl8-clf"/><path class="d81cmo-oy"/><path class="ijl0gbtvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:import-export-48-bold"} {...others} />);
}

export default Component;
