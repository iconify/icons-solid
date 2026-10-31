import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3gyotos.css';
import '../../css/v/vhfnlbb4f.css';
import '../../css/x/x87u6nj0f.css';
import '../../css/b/b_mdlt70l.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lq3gyotos"/><path class="vhfnlbb4f"/><path class="x87u6nj0f"/><path class="b_mdlt70l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:lamb"} {...others} />);
}

export default Component;
