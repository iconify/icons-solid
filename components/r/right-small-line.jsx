import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loyc48x7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loyc48x7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:right-small-line"} {...others} />);
}

export default Component;
