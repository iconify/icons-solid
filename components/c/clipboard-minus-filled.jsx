import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l17hfdciu.css';
import '../../css/q/q99ze-byw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l17hfdciu"/><path class="q99ze-byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-minus-filled"} {...others} />);
}

export default Component;
