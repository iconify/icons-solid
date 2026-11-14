import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/twjtbteoq.css';
import '../../css/t/ta-7qab3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="twjtbteoq"/><path class="ta-7qab3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-user"} {...others} />);
}

export default Component;
