import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xce7e9krf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xce7e9krf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:question-2-line"} {...others} />);
}

export default Component;
