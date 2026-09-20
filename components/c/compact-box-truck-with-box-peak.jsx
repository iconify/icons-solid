import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh4e6ccdo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zh4e6ccdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:compact-box-truck-with-box-peak"} {...others} />);
}

export default Component;
