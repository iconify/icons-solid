import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax7zwolhm.css';
import '../../css/y/y-j7aeb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax7zwolhm"/><path class="y-j7aeb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cloud-computing-outlined"} {...others} />);
}

export default Component;
