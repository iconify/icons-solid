import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfd85mq7p.css';
import '../../css/t/tdi20-bhp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pfd85mq7p"/><path class="tdi20-bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flagging-taxi"} {...others} />);
}

export default Component;
