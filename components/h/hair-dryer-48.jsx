import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyjx8ab4r.css';
import '../../css/e/e2y089rqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cyjx8ab4r"/><path class="e2y089rqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hair-dryer-48"} {...others} />);
}

export default Component;
