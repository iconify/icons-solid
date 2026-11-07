import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctk3lmxrt.css';
import '../../css/i/ihwrm7b8t.css';
import '../../css/m/mlbyvsbes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctk3lmxrt"/><path class="ihwrm7b8t"/><path class="mlbyvsbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-bolt-bold-duotone"} {...others} />);
}

export default Component;
