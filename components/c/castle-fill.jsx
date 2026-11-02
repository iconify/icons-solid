import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v__ot5lqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v__ot5lqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:castle-fill"} {...others} />);
}

export default Component;
