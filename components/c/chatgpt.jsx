import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmy7jtbal.css';
import '../../css/z/zaiufn24c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmy7jtbal"/><path class="zaiufn24c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chatgpt"} {...others} />);
}

export default Component;
