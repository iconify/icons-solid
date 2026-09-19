import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djlse4bnq.css';
import '../../css/c/c8xjk5bhx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="djlse4bnq"/><path class="c8xjk5bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bonfire"} {...others} />);
}

export default Component;
