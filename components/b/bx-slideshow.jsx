import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pglqq_f1q.css';
import '../../css/t/trfu-vbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pglqq_f1q"/><path class="trfu-vbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-slideshow"} {...others} />);
}

export default Component;
