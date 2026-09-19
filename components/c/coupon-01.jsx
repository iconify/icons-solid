import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jas8p7bhq.css';
import '../../css/l/l9chowsfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jas8p7bhq"/><path class="l9chowsfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:coupon-01"} {...others} />);
}

export default Component;
