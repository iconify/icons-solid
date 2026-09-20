import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7740dnjq.css';
import '../../css/j/jclmsksby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7740dnjq"/><path class="jclmsksby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shuffle-line"} {...others} />);
}

export default Component;
