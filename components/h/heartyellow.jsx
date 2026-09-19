import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncr9o6bsk.css';
import '../../css/z/zegs8bbtq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ncr9o6bsk"/><path class="zegs8bbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heartyellow"} {...others} />);
}

export default Component;
