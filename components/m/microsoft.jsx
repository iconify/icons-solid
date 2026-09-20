import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxj4q7bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxj4q7bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:microsoft"} {...others} />);
}

export default Component;
