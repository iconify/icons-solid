import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg-e66htg.css';
import '../../css/a/abmkmib2w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dg-e66htg"/><path class="abmkmib2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nozzle-48"} {...others} />);
}

export default Component;
