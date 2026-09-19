import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/c/c89pvb-my.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="c89pvb-my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clock-3"} {...others} />);
}

export default Component;
