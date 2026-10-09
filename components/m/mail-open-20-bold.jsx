import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzzrkrbqw.css';
import '../../css/y/ya12bvd4o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uzzrkrbqw"/><path class="ya12bvd4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-open-20-bold"} {...others} />);
}

export default Component;
