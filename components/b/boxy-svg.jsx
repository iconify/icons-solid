import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrrdjo_kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrrdjo_kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:boxy-svg"} {...others} />);
}

export default Component;
