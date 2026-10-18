import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0jwcy6ix.css';
import '../../css/x/xwae3tb6y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k0jwcy6ix"/><path class="xwae3tb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ufh-manifold-48"} {...others} />);
}

export default Component;
