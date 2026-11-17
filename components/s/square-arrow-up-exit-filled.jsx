import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgf5td-lq.css';
import '../../css/z/zgpt8x30u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgf5td-lq"/><path class="zgpt8x30u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-up-exit-filled"} {...others} />);
}

export default Component;
