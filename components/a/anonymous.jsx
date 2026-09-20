import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkj37h9sb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xkj37h9sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:anonymous"} {...others} />);
}

export default Component;
