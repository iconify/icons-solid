import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d73-y3xmt.css';
import '../../css/y/yk_rn_urw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d73-y3xmt"/><path class="yk_rn_urw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-zoom-in"} {...others} />);
}

export default Component;
