import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf4qkte-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf4qkte-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ai-gateway"} {...others} />);
}

export default Component;
