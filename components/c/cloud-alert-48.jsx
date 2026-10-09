import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/b/bx2p6cc8i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="bx2p6cc8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-alert-48"} {...others} />);
}

export default Component;
