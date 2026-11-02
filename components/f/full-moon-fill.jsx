import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbu34-6ve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbu34-6ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:full-moon-fill"} {...others} />);
}

export default Component;
