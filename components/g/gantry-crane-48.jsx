import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc52um7uh.css';
import '../../css/s/sg44xgbay.css';
import '../../css/o/ofilwt45e.css';
import '../../css/o/o8irjv8pn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bc52um7uh"/><path class="sg44xgbay"/><path class="ofilwt45e"/><path class="o8irjv8pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gantry-crane-48"} {...others} />);
}

export default Component;
