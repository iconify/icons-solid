import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh0ffhb0t.css';
import '../../css/g/g0my9ebpq.css';
import '../../css/z/zsa4tjbhd.css';
import '../../css/k/k43jbz6ap.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yh0ffhb0t"/><path class="g0my9ebpq"/><path class="zsa4tjbhd"/><path class="k43jbz6ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cooker-48-bold"} {...others} />);
}

export default Component;
