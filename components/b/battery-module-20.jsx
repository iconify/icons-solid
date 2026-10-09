import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m62_8ratf.css';
import '../../css/l/lrevnvbxs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m62_8ratf"/><path class="lrevnvbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-module-20"} {...others} />);
}

export default Component;
