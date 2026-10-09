import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te48i79xt.css';
import '../../css/s/syysw3b_f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="te48i79xt"/><path class="syysw3b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crucible-48"} {...others} />);
}

export default Component;
