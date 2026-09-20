import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piz_jmb7s.css';
import '../../css/z/zs8x37yqc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="piz_jmb7s"/><path class="zs8x37yqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chat-add-16"} {...others} />);
}

export default Component;
