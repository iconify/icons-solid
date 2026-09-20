import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdtr5e43k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fdtr5e43k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:bold-geor-man"} {...others} />);
}

export default Component;
