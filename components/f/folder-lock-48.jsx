import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h68nt64um.css';
import '../../css/h/h2gpnpb6w.css';
import '../../css/w/wweom8b5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h68nt64um"/><path class="h2gpnpb6w"/><path class="wweom8b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-lock-48"} {...others} />);
}

export default Component;
