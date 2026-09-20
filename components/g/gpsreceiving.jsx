import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3x8ayb8v.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="p3x8ayb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:gpsreceiving"} {...others} />);
}

export default Component;
