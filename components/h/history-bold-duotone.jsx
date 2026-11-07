import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v25h3yxjz.css';
import '../../css/y/yh5ytlqor.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v25h3yxjz"/><path class="yh5ytlqor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-bold-duotone"} {...others} />);
}

export default Component;
