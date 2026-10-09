import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysmjyxbxr.css';
import '../../css/a/a3h2qmbcp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ysmjyxbxr"/><path class="a3h2qmbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dam-48-bold"} {...others} />);
}

export default Component;
