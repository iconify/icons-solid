import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt27gzbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt27gzbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paper-2-line"} {...others} />);
}

export default Component;
