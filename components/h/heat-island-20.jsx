import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqtu52b6d.css';
import '../../css/k/k0ztijb-p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aqtu52b6d"/><path class="k0ztijb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-island-20"} {...others} />);
}

export default Component;
