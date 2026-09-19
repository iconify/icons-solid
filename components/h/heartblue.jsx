import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-lwsub9k.css';
import '../../css/e/e3net-b-i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-lwsub9k"/><path class="e3net-b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heartblue"} {...others} />);
}

export default Component;
