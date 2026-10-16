import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqnm1rstj.css';
import '../../css/p/pmzrqcc7c.css';
import '../../css/b/bv8dp0iic.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yqnm1rstj"/><path class="pmzrqcc7c"/><path class="bv8dp0iic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-valve-48-bold"} {...others} />);
}

export default Component;
