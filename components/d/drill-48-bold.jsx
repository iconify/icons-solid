import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vneqqyb4m.css';
import '../../css/k/k4vjtezta.css';
import '../../css/w/w3ugkacjg.css';
import '../../css/o/ojfmzjr6f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vneqqyb4m"/><path class="k4vjtezta"/><path class="w3ugkacjg"/><path class="ojfmzjr6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-48-bold"} {...others} />);
}

export default Component;
