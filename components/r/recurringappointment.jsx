import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv55mnb9w.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="nv55mnb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:recurringappointment"} {...others} />);
}

export default Component;
