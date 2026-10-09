import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxsoire1d.css';
import '../../css/j/jy-i8_pkz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kxsoire1d"/><path class="jy-i8_pkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:link-48-bold"} {...others} />);
}

export default Component;
