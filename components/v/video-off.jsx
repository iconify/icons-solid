import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-sn1pm9k.css';
import '../../css/w/w89bx5biq.css';
import '../../css/m/muj9u_23o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-sn1pm9k wm-k"/><path class="w89bx5biq wm-a"/><path class="muj9u_23o wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:video-off"} {...others} />);
}

export default Component;
