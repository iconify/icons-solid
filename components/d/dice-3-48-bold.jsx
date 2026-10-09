import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzp1g281f.css';
import '../../css/l/leeivkb9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mzp1g281f"/><path class="leeivkb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dice-3-48-bold"} {...others} />);
}

export default Component;
