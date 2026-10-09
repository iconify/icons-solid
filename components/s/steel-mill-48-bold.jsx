import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcosn_gan.css';
import '../../css/p/pnxir5bod.css';
import '../../css/c/c20deubpf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qcosn_gan"/><path class="pnxir5bod"/><path class="c20deubpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steel-mill-48-bold"} {...others} />);
}

export default Component;
