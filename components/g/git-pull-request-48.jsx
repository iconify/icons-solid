import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4ersub-k.css';
import '../../css/b/bpoutcsqa.css';
import '../../css/v/v_i9e3d-i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x4ersub-k"/><path class="bpoutcsqa"/><path class="v_i9e3d-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-pull-request-48"} {...others} />);
}

export default Component;
