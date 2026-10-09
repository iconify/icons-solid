import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaq0blbdk.css';
import '../../css/p/ppdr4b5kz.css';
import '../../css/y/y7x0imbpk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oaq0blbdk"/><path class="ppdr4b5kz"/><path class="y7x0imbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-pipeline-48"} {...others} />);
}

export default Component;
