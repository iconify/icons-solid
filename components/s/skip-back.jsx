import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tri6pru9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tri6pru9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:skip-back"} {...others} />);
}

export default Component;
