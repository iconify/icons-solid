import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcnwxeb0d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mcnwxeb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:subscript-ltr"} {...others} />);
}

export default Component;
