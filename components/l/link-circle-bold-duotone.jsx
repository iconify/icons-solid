import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/u/u2anyn4fc.css';
import '../../css/b/bbs3bcbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="u2anyn4fc"/><path class="bbs3bcbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-circle-bold-duotone"} {...others} />);
}

export default Component;
