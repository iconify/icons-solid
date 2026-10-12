import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbxahob9m.css';
import '../../css/e/e0y01nbqv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbxahob9m"/><path class="e0y01nbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binder-48"} {...others} />);
}

export default Component;
