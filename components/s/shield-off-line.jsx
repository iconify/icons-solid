import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj3lfty5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj3lfty5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:shield-off-line"} {...others} />);
}

export default Component;
