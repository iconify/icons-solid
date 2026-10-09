import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7de_1bdc.css';
import '../../css/d/djawiyg4a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p7de_1bdc"/><path class="djawiyg4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gloves-48-bold"} {...others} />);
}

export default Component;
