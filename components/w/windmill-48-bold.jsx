import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxhd3fa8c.css';
import '../../css/l/l19np-bgg.css';
import '../../css/e/e3xg10aou.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxhd3fa8c"/><path class="l19np-bgg"/><path class="e3xg10aou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:windmill-48-bold"} {...others} />);
}

export default Component;
