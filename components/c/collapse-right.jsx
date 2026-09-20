import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybrcn-9lv.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ybrcn-9lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:collapse-right"} {...others} />);
}

export default Component;
