import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgev133np.css';
import '../../css/x/xv0ebrkwd.css';
import '../../css/v/v1pbn233l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vgev133np"/><path class="xv0ebrkwd"/><path class="v1pbn233l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elevator-48"} {...others} />);
}

export default Component;
