import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx-_djyyn.css';
import '../../css/p/pci-8zxna.css';
import '../../css/j/j83cdtwkl.css';
import '../../css/z/z2lgmebod.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lx-_djyyn"/><path class="pci-8zxna"/><path class="j83cdtwkl"/><path class="z2lgmebod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-pipeline-20-bold"} {...others} />);
}

export default Component;
