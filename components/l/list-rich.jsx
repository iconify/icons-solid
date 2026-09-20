import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy2-xpbxq.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="yy2-xpbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:list-rich"} {...others} />);
}

export default Component;
