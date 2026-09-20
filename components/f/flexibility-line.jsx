import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyh2a17xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qyh2a17xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flexibility-line"} {...others} />);
}

export default Component;
