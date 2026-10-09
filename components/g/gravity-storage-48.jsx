import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-0gtd2mz.css';
import '../../css/m/m6ie1s5oi.css';
import '../../css/y/y6_vscbok.css';
import '../../css/b/b23aghbhl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a-0gtd2mz"/><path class="m6ie1s5oi"/><path class="y6_vscbok"/><path class="b23aghbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-storage-48"} {...others} />);
}

export default Component;
