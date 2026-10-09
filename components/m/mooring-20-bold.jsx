import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdy4ipb5m.css';
import '../../css/s/swkeh7byr.css';
import '../../css/z/zjjlddhpx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zdy4ipb5m"/><path class="swkeh7byr"/><path class="zjjlddhpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mooring-20-bold"} {...others} />);
}

export default Component;
