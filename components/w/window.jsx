import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaqbl-r6w.css';
import '../../css/s/so3e90wwx.css';
import '../../css/c/c8hqp7why.css';
import '../../css/g/gyyh67byr.css';
import '../../css/j/j8u7c0b3a.css';
import '../../css/i/ix9rl9e2p.css';
import '../../css/d/dp7x0nnft.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zaqbl-r6w"/><circle class="so3e90wwx"/><circle class="c8hqp7why"/><circle class="gyyh67byr"/><path class="j8u7c0b3a"/><path class="ix9rl9e2p"/><path class="dp7x0nnft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:window"} {...others} />);
}

export default Component;
