import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7_cf1b6s.css';
import '../../css/l/liguc8hzg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i7_cf1b6s"/><path class="liguc8hzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-off-48"} {...others} />);
}

export default Component;
