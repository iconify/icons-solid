import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggljjvbkh.css';
import '../../css/s/s0ff9zwpj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ggljjvbkh"/><path class="s0ff9zwpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phone-outgoing"} {...others} />);
}

export default Component;
