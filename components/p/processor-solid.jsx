import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkkv6qbnz.css';
import '../../css/m/mg4u22kbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkkv6qbnz"/><path clip-rule="evenodd" class="mg4u22kbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:processor-solid"} {...others} />);
}

export default Component;
