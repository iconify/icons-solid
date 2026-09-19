import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9kyeodza.css';
import '../../css/t/t_0rrslox.css';
import '../../css/w/wxma-tm4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9kyeodza"/><path class="t_0rrslox"/><circle class="wxma-tm4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:instagram"} {...others} />);
}

export default Component;
