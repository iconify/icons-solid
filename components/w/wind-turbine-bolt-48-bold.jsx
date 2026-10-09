import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocxzmlbuv.css';
import '../../css/w/wr0ronh9v.css';
import '../../css/z/zm910po5a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ocxzmlbuv"/><path class="wr0ronh9v"/><path class="zm910po5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-bolt-48-bold"} {...others} />);
}

export default Component;
