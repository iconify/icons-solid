import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utf77lbef.css';
import '../../css/b/bm1aiubys.css';
import '../../css/h/h6bsihbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="utf77lbef"/><path class="bm1aiubys"/><path class="h6bsihbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-dots-48"} {...others} />);
}

export default Component;
