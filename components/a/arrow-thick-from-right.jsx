import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfqe5lbwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vfqe5lbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-thick-from-right"} {...others} />);
}

export default Component;
