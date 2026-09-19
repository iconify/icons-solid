import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6q-f6bnh.css';
import '../../css/n/ntww7eznl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6q-f6bnh"/><path class="ntww7eznl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:mood-good"} {...others} />);
}

export default Component;
