import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o71yskhbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o71yskhbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-up-down-fill-20"} {...others} />);
}

export default Component;
