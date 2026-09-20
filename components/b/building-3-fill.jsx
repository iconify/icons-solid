import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw9awtb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dw9awtb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:building-3-fill"} {...others} />);
}

export default Component;
