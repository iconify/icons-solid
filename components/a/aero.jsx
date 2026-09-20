import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvt9sjb9p.css';
import '../../css/y/yz-gywb0o.css';
import '../../css/o/owjnrbm2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvt9sjb9p"/><path class="yz-gywb0o"/><path class="owjnrbm2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aero"} {...others} />);
}

export default Component;
