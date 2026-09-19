import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yawxv12cb.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yawxv12cb"/><path class="bwibdw4bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:happy"} {...others} />);
}

export default Component;
