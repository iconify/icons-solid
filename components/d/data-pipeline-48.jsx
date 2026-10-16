import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oovvmabkz.css';
import '../../css/p/plqdzxpyi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oovvmabkz"/><path class="plqdzxpyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-pipeline-48"} {...others} />);
}

export default Component;
