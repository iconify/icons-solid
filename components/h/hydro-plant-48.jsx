import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4__ecb7c.css';
import '../../css/b/by5xuwclv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d4__ecb7c"/><path class="by5xuwclv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-48"} {...others} />);
}

export default Component;
