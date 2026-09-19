import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oay6jmmyd.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oay6jmmyd"/><path class="bwibdw4bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:happy-alt"} {...others} />);
}

export default Component;
