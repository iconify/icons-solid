import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlej7bzzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlej7bzzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-patient-1"} {...others} />);
}

export default Component;
