import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra-t_bbyc.css';
import '../../css/c/c7l7flb0g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ra-t_bbyc"/><path class="c7l7flb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type2-48-bold"} {...others} />);
}

export default Component;
