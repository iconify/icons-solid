import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm3xmebmn.css';
import '../../css/a/aglz3sohk.css';
import '../../css/z/zjcvkggsp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qm3xmebmn"/><path class="aglz3sohk"/><path class="zjcvkggsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:property-safety-twotone"} {...others} />);
}

export default Component;
