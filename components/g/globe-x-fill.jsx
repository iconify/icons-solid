import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wutb45b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wutb45b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:globe-x-fill"} {...others} />);
}

export default Component;
