import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c78rfib1o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/d/d_u133t5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c78rfib1o"/><path class="hwjgqrbah"/><path class="d_u133t5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-check-48-bold"} {...others} />);
}

export default Component;
