import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv1v2qimq.css';
import '../../css/x/x0zjy2t6m.css';
import '../../css/e/e39a7buae.css';
import '../../css/c/cjnszo8hf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fv1v2qimq"/><path class="x0zjy2t6m"/><path class="e39a7buae"/><path class="cjnszo8hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vehicle-to-home-48-bold"} {...others} />);
}

export default Component;
