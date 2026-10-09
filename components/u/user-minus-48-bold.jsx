import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh2_u5bkm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lh2_u5bkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-minus-48-bold"} {...others} />);
}

export default Component;
