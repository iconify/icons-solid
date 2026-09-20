import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx9__mp1q.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="xx9__mp1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-cancelled"} {...others} />);
}

export default Component;
