import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdiyli40o.css';
import '../../css/p/pc-bfqbig.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdiyli40o"/><path class="pc-bfqbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:line-height-48-bold"} {...others} />);
}

export default Component;
