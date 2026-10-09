import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/defz0cbcm.css';
import '../../css/n/nh7e1h-bk.css';
import '../../css/u/utldc7bos.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="defz0cbcm"/><path class="nh7e1h-bk"/><path class="utldc7bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kpi-48-bold"} {...others} />);
}

export default Component;
