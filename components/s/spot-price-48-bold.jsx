import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc7sk8bgn.css';
import '../../css/h/hiqojibfd.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cc7sk8bgn"/><path class="hiqojibfd"/><path class="rb9owibwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spot-price-48-bold"} {...others} />);
}

export default Component;
