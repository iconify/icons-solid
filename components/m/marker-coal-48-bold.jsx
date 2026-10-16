import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/c/c4c6vbbnb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="c4c6vbbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-coal-48-bold"} {...others} />);
}

export default Component;
