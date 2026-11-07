import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xldk15bbn.css';
import '../../css/u/uee4y3m1v.css';
import '../../css/e/esmj5zbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xldk15bbn"/><path class="uee4y3m1v"/><path class="esmj5zbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-line-bold-duotone"} {...others} />);
}

export default Component;
