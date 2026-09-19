import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxciqpbda.css';
import '../../css/f/fne6a9bsp.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zxciqpbda"/><path class="fne6a9bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:laptop-outline"} {...others} />);
}

export default Component;
