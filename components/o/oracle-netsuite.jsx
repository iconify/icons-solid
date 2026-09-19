import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grxeyx-0b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="grxeyx-0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:oracle-netsuite"} {...others} />);
}

export default Component;
