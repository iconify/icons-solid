import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf-0_1bay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf-0_1bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:brush-2-ai-fill"} {...others} />);
}

export default Component;
