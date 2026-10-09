import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0413yb0o.css';
import '../../css/z/z_jrvqbbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u0413yb0o"/><path class="z_jrvqbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-48"} {...others} />);
}

export default Component;
