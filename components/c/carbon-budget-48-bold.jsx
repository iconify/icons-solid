import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjod6gb0n.css';
import '../../css/r/r1303ebjq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vjod6gb0n"/><path class="r1303ebjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-budget-48-bold"} {...others} />);
}

export default Component;
