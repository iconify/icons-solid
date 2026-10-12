import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi97z4bps.css';
import '../../css/r/rh7ug_byb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mi97z4bps"/><path class="rh7ug_byb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frog-48-bold"} {...others} />);
}

export default Component;
