import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li7an9b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="li7an9b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hat-fill"} {...others} />);
}

export default Component;
