import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukaq_cb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukaq_cb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-right-up-circle-line"} {...others} />);
}

export default Component;
