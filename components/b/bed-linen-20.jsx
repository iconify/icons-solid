import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai8hlzasl.css';
import '../../css/y/y-q9b7fwc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ai8hlzasl"/><path class="y-q9b7fwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-linen-20"} {...others} />);
}

export default Component;
