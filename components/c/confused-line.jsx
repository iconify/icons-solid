import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff1o3km4s.css';
import '../../css/s/s3ykwebuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff1o3km4s"/><path class="s3ykwebuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:confused-line"} {...others} />);
}

export default Component;
