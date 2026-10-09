import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za30h5bbb.css';
import '../../css/f/f7qu89bfn.css';
import '../../css/n/nzc3r4b2a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="za30h5bbb"/><path class="f7qu89bfn"/><path class="nzc3r4b2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workspace-48"} {...others} />);
}

export default Component;
