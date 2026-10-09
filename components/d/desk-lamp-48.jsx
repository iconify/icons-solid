import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sabjbxbkn.css';
import '../../css/k/kosmuobvp.css';
import '../../css/i/iln-rgb3n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sabjbxbkn"/><path class="kosmuobvp"/><path class="iln-rgb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-lamp-48"} {...others} />);
}

export default Component;
