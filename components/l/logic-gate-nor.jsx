import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an4mqobkj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="an4mqobkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:logic-gate-nor"} {...others} />);
}

export default Component;
