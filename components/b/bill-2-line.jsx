import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juhk9ubtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juhk9ubtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bill-2-line"} {...others} />);
}

export default Component;
