import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io2eiemnh.css';
import '../../css/u/uxhgw2beg.css';
import '../../css/w/weytrjnhh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="io2eiemnh"/><path class="uxhgw2beg"/><path class="weytrjnhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-limit-20"} {...others} />);
}

export default Component;
