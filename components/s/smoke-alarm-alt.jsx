import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/v/vo1howbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="vo1howbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:smoke-alarm-alt"} {...others} />);
}

export default Component;
