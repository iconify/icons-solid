import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjq687iou.css';
import '../../css/n/nwrt1lbjl.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qjq687iou"/><path class="nwrt1lbjl"/><path class="yipyoybdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-paginate-filter-picture"} {...others} />);
}

export default Component;
