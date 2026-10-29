import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-0sac1ac.css';
import '../../css/e/ethxkj-4y.css';
import '../../css/u/uqezks9bc.css';
import '../../css/r/rywysftcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-0sac1ac wm-k"/><path class="ethxkj-4y wm-k"/><path class="uqezks9bc wm-a"/><path class="rywysftcv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:briefcase-medical"} {...others} />);
}

export default Component;
