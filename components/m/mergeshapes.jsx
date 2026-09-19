import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh_u9bbel.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="yh_u9bbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mergeshapes"} {...others} />);
}

export default Component;
