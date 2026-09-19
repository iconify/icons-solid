import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tihaa0pcb.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="tihaa0pcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-stack-3d-up-slash-fill"} {...others} />);
}

export default Component;
