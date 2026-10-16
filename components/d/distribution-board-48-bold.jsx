import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sox1xn30r.css';
import '../../css/y/y--l7jbip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sox1xn30r"/><path class="y--l7jbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribution-board-48-bold"} {...others} />);
}

export default Component;
