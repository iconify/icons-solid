import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwpqig4o.css';
import '../../css/k/kqa6_mmwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vcwpqig4o"/><path class="kqa6_mmwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-dog-48-bold"} {...others} />);
}

export default Component;
