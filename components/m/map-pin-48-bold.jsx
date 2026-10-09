import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/a/atnbb5brv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="atnbb5brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-48-bold"} {...others} />);
}

export default Component;
