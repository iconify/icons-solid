import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha4ba9bgu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ha4ba9bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:reference-rtl"} {...others} />);
}

export default Component;
