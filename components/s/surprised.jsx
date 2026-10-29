import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xnc1qkb-s.css';
import '../../css/v/v_quf4r_u.css';
import '../../css/a/a0d2n6bid.css';
import '../../css/n/n0p30nbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xnc1qkb-s"/><path class="v_quf4r_u"/><path class="a0d2n6bid"/><path class="n0p30nbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:surprised"} {...others} />);
}

export default Component;
