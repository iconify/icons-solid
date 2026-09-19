import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atfst2bbd.css';
import '../../css/x/xk80sybyi.css';
import '../../css/t/tc2fj349v.css';
import '../../css/v/velq4uheh.css';
import '../../css/g/gdgn-sbca.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="atfst2bbd"/><path class="xk80sybyi"/><path class="tc2fj349v"/><path class="velq4uheh"/><path class="gdgn-sbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pie-chart-twotone"} {...others} />);
}

export default Component;
