import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xainp7b4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xainp7b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:red-packet-open-line"} {...others} />);
}

export default Component;
