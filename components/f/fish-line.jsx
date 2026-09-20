import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0d8qi36j.css';
import '../../css/j/jej9w9b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0d8qi36j"/><path class="jej9w9b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fish-line"} {...others} />);
}

export default Component;
