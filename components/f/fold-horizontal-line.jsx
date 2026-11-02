import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6eo6ewzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6eo6ewzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fold-horizontal-line"} {...others} />);
}

export default Component;
