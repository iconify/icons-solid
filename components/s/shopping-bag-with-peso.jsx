import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh-fyachc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zh-fyachc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shopping-bag-with-peso"} {...others} />);
}

export default Component;
