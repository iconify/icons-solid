import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5_kp7xga.css';
import '../../css/p/p6gxp-bjt.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o5_kp7xga"/><path class="p6gxp-bjt"/><path class="h2w2gxl4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tension-leg-48-bold"} {...others} />);
}

export default Component;
