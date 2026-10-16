import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzeh33brv.css';
import '../../css/k/k2l56tbqb.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gzeh33brv"/><path class="k2l56tbqb"/><path class="ihmii9b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:industrial-boiler-48-bold"} {...others} />);
}

export default Component;
