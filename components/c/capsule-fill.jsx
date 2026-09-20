import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3j60pb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p3j60pb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:capsule-fill"} {...others} />);
}

export default Component;
