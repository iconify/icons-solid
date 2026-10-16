import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb3conbjb.css';
import '../../css/x/x1p0svkkr.css';
import '../../css/b/bf52ribiq.css';
import '../../css/x/x3z57-byv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bb3conbjb"/><path class="x1p0svkkr"/><path class="bf52ribiq"/><path class="x3z57-byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-queue-48-bold"} {...others} />);
}

export default Component;
