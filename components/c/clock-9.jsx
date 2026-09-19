import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/x/xic7bvc_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="xic7bvc_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clock-9"} {...others} />);
}

export default Component;
