import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxc6vr24n.css';
import '../../css/s/sor5e_3vz.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="mxc6vr24n"/><path class="sor5e_3vz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:camera-home"} {...others} />);
}

export default Component;
