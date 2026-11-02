import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cedxij8rg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cedxij8rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:attachment-3-fill"} {...others} />);
}

export default Component;
