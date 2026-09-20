import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tysv080gv.css';
import '../../css/r/rbu861b0a.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="tysv080gv"/><path class="rbu861b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ticket-alt"} {...others} />);
}

export default Component;
