import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn8qmrq_l.css';
import '../../css/z/z_1yk_sgq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nn8qmrq_l"/><path class="z_1yk_sgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eraser-48-bold"} {...others} />);
}

export default Component;
