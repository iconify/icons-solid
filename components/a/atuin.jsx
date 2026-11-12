import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o00mox2jp.css';
import '../../css/v/vvf5jwbia.css';
import '../../css/y/yy3gn3bdh.css';
import '../../css/w/wyz0op3ai.css';
import '../../css/j/j8ludxbpa.css';
import '../../css/h/h8wq5t_qj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o00mox2jp"/><path class="vvf5jwbia"/><path class="yy3gn3bdh"/><path class="wyz0op3ai"/><path class="j8ludxbpa"/><path class="h8wq5t_qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atuin"} {...others} />);
}

export default Component;
