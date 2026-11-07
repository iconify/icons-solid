import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeidxnbcj.css';
import '../../css/l/loxl4zb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eeidxnbcj"/><path class="loxl4zb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ranking-bold"} {...others} />);
}

export default Component;
