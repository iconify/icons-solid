import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw5pvbc7n.css';

const viewBox = {"width":2048,"height":1728};
const content = `<path class="cw5pvbc7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wechat"} {...others} />);
}

export default Component;
