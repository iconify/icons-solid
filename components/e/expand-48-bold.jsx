import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk_btpb8m.css';
import '../../css/s/s-anv9bde.css';
import '../../css/h/hfommxotc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gk_btpb8m"/><path class="s-anv9bde"/><path class="hfommxotc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expand-48-bold"} {...others} />);
}

export default Component;
