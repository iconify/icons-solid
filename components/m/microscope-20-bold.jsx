import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpk6ucc_d.css';
import '../../css/z/zm70e2bpm.css';
import '../../css/c/ciep4282w.css';
import '../../css/n/nxoc-wizh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lpk6ucc_d"/><path class="zm70e2bpm"/><path class="ciep4282w"/><path class="nxoc-wizh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microscope-20-bold"} {...others} />);
}

export default Component;
