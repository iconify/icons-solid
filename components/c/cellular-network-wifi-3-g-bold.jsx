import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwufgkxlf.css';
import '../../css/g/gxyu-bb-c.css';
import '../../css/l/lpo2j3beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwufgkxlf"/><path class="gxyu-bb-c"/><path class="lpo2j3beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cellular-network-wifi-3-g-bold"} {...others} />);
}

export default Component;
