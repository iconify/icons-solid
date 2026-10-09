import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaq0blbdk.css';
import '../../css/b/bi902ok_o.css';
import '../../css/e/ecorgja0z.css';
import '../../css/y/y7x0imbpk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oaq0blbdk"/><path class="bi902ok_o"/><path class="ecorgja0z"/><path class="y7x0imbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-pipeline-48"} {...others} />);
}

export default Component;
