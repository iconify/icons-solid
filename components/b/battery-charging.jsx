import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n91-pkucr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n91-pkucr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:battery-charging"} {...others} />);
}

export default Component;
