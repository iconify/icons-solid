import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjpro_u9e.css';
import '../../css/q/q0wqs_b6r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xjpro_u9e"/><path class="q0wqs_b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:create-sharp"} {...others} />);
}

export default Component;
