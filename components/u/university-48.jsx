import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8vrn9u6r.css';
import '../../css/m/m3htm8bpv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r8vrn9u6r"/><path class="m3htm8bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:university-48"} {...others} />);
}

export default Component;
