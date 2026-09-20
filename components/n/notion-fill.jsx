import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m95-apbor.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m95-apbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:notion-fill"} {...others} />);
}

export default Component;
